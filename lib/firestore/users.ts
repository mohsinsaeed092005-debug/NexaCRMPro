import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { UserProfile } from "@/types/firestore";

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    if (!db) throw new Error("Firebase is not configured.");
    const snap = await getDoc(doc(db, "users", uid));
    if (!snap.exists()) return null;
    return { uid, ...snap.data() } as UserProfile;
  } catch (err) {
    console.error("getUserProfile failed:", err);
    throw new Error("Could not load user profile.");
  }
}

export async function updateUserProfile(
  uid: string,
  updates: Partial<Pick<UserProfile, "name">>
): Promise<void> {
  try {
    if (!db) throw new Error("Firebase is not configured.");
    await updateDoc(doc(db, "users", uid), updates);
  } catch (err) {
    console.error("updateUserProfile failed:", err);
    throw new Error("Could not update user profile.");
  }
}
