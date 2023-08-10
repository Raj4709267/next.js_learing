import Link from "next/link";
import React from "react";

const Students = () => {
  return (
    <div>
      <h1>Students</h1>
      {["raj", "kumar", "mahto"].map((item, i) => {
        return (
          <>
            <Link key={i} href={`/student/${item}`}>
              {item}
            </Link>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Students;
