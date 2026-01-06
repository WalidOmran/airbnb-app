"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SignInButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (!session) {
    return (
        <Link  href="/SignIn" className="cursor-pointer px-3 py-1 rounded-full border">Sign In</Link>
    
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span>Hello {session.user?.name}</span>
      <button
        className="cursor-pointer px-3 py-1 rounded-full border"
        onClick={() => signOut()}
        aria-label="Sign Out"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignInButton;
