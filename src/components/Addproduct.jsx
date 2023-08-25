import React, { useEffect, useState } from "react";

export const Addproduct = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts`)
      .then((response) => response.json())
      .then((data) => {
        if (data.carts) {
          setCarts(data.carts);
        }
      });
  }, []);

  return (
    <div className="cart-container">
      {carts.length > 0 ? (
        carts.map((cart) => (
          <div key={cart.id} className="cart-item">
            <p className="cart-heading">Cart ID: {cart.id}</p>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <p>Total Products: {cart.totalProducts}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>
            <p className="products-heading">Products:</p>
            {cart.products.map((product) => (
              <div key={product.id} className="product-item">
                <p className="product-title">Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total: {product.total}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No carts available</p>
      )}
    </div>
  );
};
