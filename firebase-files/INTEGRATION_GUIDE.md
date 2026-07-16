# NexaCRM Firebase Integration Guide

This adds Firebase Auth + Firestore to your existing Next.js 15 (App Router,
TypeScript, Tailwind v4) frontend **without touching your existing UI markup**.
You'll drop in new files, then add a few lines to your existing pages to wire
them up.

## 0. Install Firebase

```bash
cd M:\NexaCRMpro\nexacrm-frontend\nexacrm
npm install firebase
```

## 1. Create a Firebase project

1. Go to https://console.firebase.google.com → Add project → name it `NexaCRM` (or similar).
2. In the project, go to **Build > Authentication > Sign-in method** → enable **Email/Password**.
3. Go to **Build > Firestore Database** → Create database → start in **production mode**.
4. Go to **Project settings > General > Your apps** → Add a Web app → copy the config values.

## 2. Environment variables

Copy `.env.local.example` → `.env.local` in your project root and fill in the values
from step 1. **Never commit `.env.local`** — confirm it's in `.gitignore` (Next.js
adds this by default).

## 3. Drop in the new files

Copy these into your project, preserving the folder structure:

```
lib/firebase.ts
lib/firestore/users.ts
lib/firestore/clients.ts
lib/firestore/leads.ts
lib/firestore/tasks.ts
types/firestore.ts
contexts/AuthContext.tsx
components/auth/ProtectedRoute.tsx
firestore.rules          (deploy separately, see step 6)
```

If your `tsconfig.json` doesn't already have the `@/*` path alias, add it (Next.js
usually scaffolds this by default):

```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./*"] }
  }
}
```

## 4. Wrap the app with AuthProvider

In `app/layout.tsx`, wrap your existing body content — don't change anything else:

```tsx
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
```

## 5. Wire up your existing pages

These are additions to your existing components' *logic* (state/handlers), not
their JSX/styling.

### `app/(auth)/login/page.tsx`

```tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

// Inside your existing component:
const { logIn, authError, clearAuthError } = useAuth();
const [isSubmitting, setIsSubmitting] = useState(false);
const router = useRouter();

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  clearAuthError();
  setIsSubmitting(true);
  try {
    await logIn(email, password); // use your existing email/password state
    router.push("/dashboard");
  } catch {
    // authError is already set by the context; show it in your existing error UI
  } finally {
    setIsSubmitting(false);
  }
}
```
Attach `handleSubmit` to your existing form's `onSubmit`. Render `authError` where
you'd show a validation message, and disable/spin your existing submit button
while `isSubmitting` is true.

### `app/(auth)/signup/page.tsx`

Same pattern, using `signUp(name, email, password)` instead of `logIn`.

### `app/(dashboard)/layout.tsx`

Wrap your existing shell (Sidebar + Navbar + children) with `ProtectedRoute`:

```tsx
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      {/* your existing Sidebar / Navbar / layout markup, unchanged */}
      {children}
    </ProtectedRoute>
  );
}
```
This protects `/dashboard`, `/clients`, `/leads`, `/tasks`, `/settings` in one
place since they share this layout. Unauthenticated users are redirected to
`/login` automatically.

### Logout (in `components/layout/Navbar.tsx` or `Sidebar.tsx`)

```tsx
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const { logOut } = useAuth();
const router = useRouter();

async function handleLogout() {
  await logOut();
  router.push("/login");
}
```
Attach `handleLogout` to your existing logout button's `onClick`.

## 6. Deploy Firestore security rules

Without this, your data is wide open. Using the Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
firebase init firestore   # point it at the existing project, use firestore.rules
firebase deploy --only firestore:rules
```

## 7. Replace static demo data with Firestore (clients/leads/tasks pages)

Your pages currently read from `lib/data.ts`. Swap that for the subscribe
functions, e.g. in `app/(dashboard)/clients/page.tsx`:

```tsx
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { subscribeToClients } from "@/lib/firestore/clients";
import { Client } from "@/types/firestore";

const { user } = useAuth();
const [clients, setClients] = useState<Client[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  if (!user) return;
  const unsubscribe = subscribeToClients(
    user.uid,
    (data) => { setClients(data); setLoading(false); },
    (message) => { setError(message); setLoading(false); }
  );
  return unsubscribe;
}, [user]);
```
Then render `clients` in place of your static import, with your existing table
markup unchanged. Same pattern applies to `leads` (`subscribeToLeads`) and
`tasks` (`subscribeToTasks`), using `addClient` / `addLead` / `addTask` for your
existing "create" forms/modals.

## Notes

- All Firestore functions throw a clean `Error` with a user-safe message on
  failure — catch them in your components and show `error.message`.
- `ProtectedRoute` shows a small spinner while checking auth state, then
  redirects or renders children — it never flashes protected UI to a logged-out
  visitor.
- Data is scoped per-user via `ownerId` — one user's clients/leads/tasks are
  invisible to another, enforced both in the queries and in `firestore.rules`.
