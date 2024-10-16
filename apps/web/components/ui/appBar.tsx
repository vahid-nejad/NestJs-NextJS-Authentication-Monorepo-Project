import Link from "next/link";
import React from "react";
import SignInButton from "../SignInButton";

const AppBar = () => {
  return (
    <div className="p-2 shadow flex gap-3 bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/profile"}>Profile</Link>
      <SignInButton />
    </div>
  );
};

export default AppBar;
