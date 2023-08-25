import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [count, setCount] = useState(0);
  const [price, setprice] = useState(0);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleAdd(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);

    updatedCartItems[index].price =
      cartItems[index].price * updatedCartItems[index].quantity;

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  function handleMin(index) {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 0) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
    updatedCartItems[index].price =
      cartItems[index].price * updatedCartItems[index].quantity;

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  return (
    <>
      <div className="cartt">
        {cartItems.map((item, i) => {
          return (
            <div key={i} className="cartItem">
              {console.log(i)}
              <div className="inn">
                <p>Quantity:</p>
                <p>{item.quantity}</p>
              </div>
              <p>{item.title}</p>
              <img src={item.thumbnail} alt="not found" />
              <div className="buttons">
                <button onClick={() => handleAdd(i)}>+</button>
                <button onClick={() => handleMin(i)}>-</button>
              </div>
              <p>{item.price}LL</p> {/* Display price */}
            </div>
          );
        })}
      </div>
    </>
  );
};
