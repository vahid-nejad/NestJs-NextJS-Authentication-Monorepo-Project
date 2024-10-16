import { getSession } from "@/lib/session";
import Link from "next/link";
import React from "react";

const SignInButton = async () => {
  const session = await getSession();
  return (
    <div className="flex items-center gap-2 ml-auto">
      {!session || !session.user ? (
        <>
          <Link href={"/auth/signin"}>Sign In</Link>
          <Link href={"/auth/signup"}>Sign Up</Link>
        </>
      ) : (
        <>
          <p>{session.user.name}</p>
          <a href={"/api/auth/signout"}>Sign Out</a>
        </>
      )}
    </div>
  );
};

export default SignInButton;
