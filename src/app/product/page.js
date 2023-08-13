"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Product from client</h1>
      {products.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              margin: "10px",
            }}
          >
            <img width={"100px"} src={item.thumbnail} alt="kk" />
            <Image src={item.thumbnail} width={100} height={100} />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
