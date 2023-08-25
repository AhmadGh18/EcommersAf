import React, { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error(
            "Fetched data does not contain an array of products:",
            data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const navigate = useNavigate();

  function handleclick(prodid) {
    navigate(`/result/${prodid}`);
  }

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((product, i) => (
          <div
            key={product.id}
            className="product"
            onClick={() => handleclick(product.id)}
          >
            <img src={product.thumbnail} alt="no" />

            <h2>
              <strong>{product.title}</strong>
            </h2>
            <p>{product.description}</p>
            <p>
              <strong>Price: </strong>${product.price}
            </p>
            <p>
              <strong>Discount</strong>: {product.discountPercentage}%
            </p>
            <p>
              <strong>Rating:</strong> {product.rating}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category</strong>: {product.category}
            </p>
          </div>
        ))
      ) : (
        <div className="skeltonhold">
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      )}
    </div>
  );
}
