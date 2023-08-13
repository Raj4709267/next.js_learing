import Link from "next/link";
import React from "react";
import ProductserverButton from "./productserverButton";

const fetchData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data.products.length);
  return data.products;
};

const ProductServer = async () => {
  const products = await fetchData();
  return (
    <div>
      <h1>ProductServer</h1>
      <Link href={"/"}>go to home</Link>
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
            <h4>{item.title}</h4>
            <ProductserverButton id={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductServer;
