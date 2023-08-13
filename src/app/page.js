"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className={styles.main}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log("lll");
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <Link href={"/login"}>go to login page</Link>
      <br />
      <Link href={"/about"}>go to about page</Link>
      <br />
      <Link href={"/product"}>go to product</Link>
      <br />
      <Link href={"/productserver"}>go to product from server</Link>
    </main>
  );
}
