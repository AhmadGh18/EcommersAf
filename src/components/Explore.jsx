import React, { useState } from "react";
import Products from "./Products";

const Explore = () => {
  const [data, setdata] = useState([]);
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => setdata(data));
  return (
    <div>
      <Products />
    </div>
  );
};

export default Explore;
