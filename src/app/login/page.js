"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const navigate = useRouter();
  const navigateToHome = () => {
    navigate.push("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={navigateToHome}>go to home</button>
      <Link href={"/login/studentlogin"}>studentlogin</Link>
      <br />
      <Link href={"/login/teacherlogin"}>teacherlogin</Link>
    </div>
  );
};

export default Login;
