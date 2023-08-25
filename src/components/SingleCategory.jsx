import React, { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { useNavigate } from "react-router-dom";

export const SingleCategory = ({ category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        setLoading(false); // Set loading to false in case of an error
      });
  }, [category]);
  const navigate = useNavigate();
  function handleclick(prodid) {
    navigate(`/result/${prodid}`);
  }

  return (
    <div className="categholder">
      {loading ? (
        <div>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : (
        items.map((el) => (
          <div
            key={el.id}
            className="product-info"
            onClick={() => handleclick(el.id)}
          >
            <h3>{el.title}</h3>
            <p>Price: {el.price}</p>
            <p>
              <strong>Discount</strong> Percentage: {el.discountPercentage}
            </p>
            <p>Description: {el.description}</p>
            <img src={el.thumbnail} />
          </div>
        ))
      )}
    </div>
  );
};
