"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import {
  auth,
  db,
  firebaseSetupMessage,
  isFirebaseConfigured,
} from "@/lib/firebase";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  authError: string | null;
  configured: boolean;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  clearAuthError: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function friendlyAuthError(code: string): string {
  switch (code) {
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Incorrect email or password.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    case "auth/popup-blocked":
      return "Popup was blocked. Allow popups for this site and try again.";
    case "auth/account-exists-with-different-credential":
      return "An account already exists with this email using a different sign-in method.";
    case "auth/operation-not-allowed":
      return "Google sign-in is not enabled for this Firebase project.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized in Firebase Authentication settings.";
    case "permission-denied":
      return "Login worked, but Firestore rules blocked profile access.";
    case "unavailable":
      return "Firebase is temporarily unavailable. Please try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

function assertFirebaseReady() {
  if (!auth || !db) {
    throw new Error(firebaseSetupMessage);
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message === firebaseSetupMessage) {
    return error.message;
  }

  return friendlyAuthError(
    typeof error === "object" && error && "code" in error
      ? String(error.code)
      : ""
  );
}

async function syncUserProfile(firebaseUser: User, name?: string) {
  if (!db) {
    return;
  }

  const userRef = doc(db, "users", firebaseUser.uid);
  const existingProfile = await getDoc(userRef);

  if (!existingProfile.exists()) {
    await setDoc(userRef, {
      name: name || firebaseUser.displayName || "User",
      email: firebaseUser.email || "",
      createdAt: serverTimestamp(),
    });
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth) {
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      authError,
      configured: isFirebaseConfigured,
      clearAuthError: () => setAuthError(null),
      signUp: async (name: string, email: string, password: string) => {
        setAuthError(null);
        try {
          assertFirebaseReady();
          const credential = await createUserWithEmailAndPassword(
            auth!,
            email,
            password
          );

          await updateProfile(credential.user, { displayName: name });
          await syncUserProfile(credential.user, name);
        } catch (error) {
          setAuthError(getErrorMessage(error));
          throw error;
        }
      },
      logIn: async (email: string, password: string) => {
        setAuthError(null);
        try {
          assertFirebaseReady();
          await signInWithEmailAndPassword(auth!, email, password);
        } catch (error) {
          setAuthError(getErrorMessage(error));
          throw error;
        }
      },
      signInWithGoogle: async () => {
        setAuthError(null);
        try {
          assertFirebaseReady();
          const provider = new GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          const credential = await signInWithPopup(auth!, provider);
          try {
            await syncUserProfile(credential.user);
          } catch (profileError) {
            console.warn("Could not sync Firebase user profile.", profileError);
          }
        } catch (error) {
          setAuthError(getErrorMessage(error));
          throw error;
        }
      },
      logOut: async () => {
        setAuthError(null);
        try {
          assertFirebaseReady();
          await signOut(auth!);
        } catch (error) {
          setAuthError(getErrorMessage(error));
          throw error;
        }
      },
    }),
    [authError, loading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
