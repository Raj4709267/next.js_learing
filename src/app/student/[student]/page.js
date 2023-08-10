"use client";
import { useParams } from "next/navigation";
import React from "react";

function StudentDetail() {
  const params = useParams();
  console.log(params);
  return <div>StudentDetail of {params.student}</div>;
}

export default StudentDetail;
