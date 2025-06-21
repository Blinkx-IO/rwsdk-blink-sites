"use client";
import { createContext } from 'react';
import { createAuthClient } from "better-auth/react";
import { customSessionClient } from "better-auth/client/plugins";
import type { auth } from "@lib/auth";
export const authClient = createAuthClient({
  plugins: [customSessionClient<typeof auth>()],
})


type UserData = ReturnType<typeof authClient.useSession>["data"]

export const signIn = async (provider: "github" | "google") => {
  const data = await authClient.signIn.social({
    provider: provider,
    callbackURL: "/dashboard"
  })
}

export const signOut = async () => {
  await authClient.signOut();
  window.location.reload();
}
const AuthContext = createContext<UserData>(null);


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data, isPending, error, refetch } = authClient.useSession()
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
