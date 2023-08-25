import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCategory } from "./SingleCategory";
import { Cart } from "./Cart";

const SearchResultDetail = () => {
  const { id } = useParams();

  const [imagesrc, setImgSrc] = useState("");
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [text, setText] = useState("Add to cart");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setImgSrc(json.thumbnail);
        setProduct(json);
        setPrice(json.price * quantity);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id, quantity]);

  if (!product) {
    return <div>Loading...</div>;
  }

  function handleQuantityChange(e) {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setPrice(product.price * newQuantity);
  }

  function addToCart() {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      thumbnail: product.thumbnail,
    };

    setCartItems((prevCartItems) => [...prevCartItems, cartItem]);
    setText("Added to Cart");

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingCartItemIndex = existingCartItems.findIndex(
      (item) => item.id === cartItem.id
    );

    let updatedCartItems = [...existingCartItems];

    if (existingCartItemIndex !== -1) {
      updatedCartItems[existingCartItemIndex].quantity += cartItem.quantity;
    } else {
      updatedCartItems.push(cartItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  return (
    <div>
      <div className="result-detail">
        <div>
          <img src={imagesrc} alt="not found" />
        </div>
        <div className="prodinfo">
          <h1>{product.title}</h1>
          <p>
            <strong>Price</strong>: {product.price}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <div className="addtocartr">
            <input
              type="number"
              onChange={handleQuantityChange}
              value={quantity}
            />
            <input type="text" value={price} readOnly />
          </div>
          <button onClick={addToCart}>{text}</button>
          <p>
            <strong>Category</strong>: {product.category}
          </p>
          <p>
            <strong>Rating</strong>: {product.rating}
          </p>
          <p>
            <strong>Stock: </strong>
            {product.stock}
          </p>
          <p>Discount Percentage: {product.discountPercentage}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
      <div>
        <ul className="descimages">
          {product.images.map((image, index) => (
            <li key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                onClick={() => {
                  setImgSrc(image);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <h1>Similar item</h1>
      <SingleCategory category={product.category} />
    </div>
  );
};

export default SearchResultDetail;
