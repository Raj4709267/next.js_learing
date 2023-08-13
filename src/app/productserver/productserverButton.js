"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductserverButton = ({ id }) => {
  const navigate = useRouter();
  return (
    <div>
      <button onClick={() => navigate.push(`/productserver/${id}`)}>
        show price
      </button>
    </div>
  );
};

export default ProductserverButton;
