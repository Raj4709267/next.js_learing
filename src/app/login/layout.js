import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";
const layout = ({ children }) => {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href={"/login/studentlogin"}>student</Link>
        <Link href={"/login/teacherlogin"}>teacher</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
