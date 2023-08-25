import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="Nav">
      <Link to="/MyCart">my Vart</Link>
      <nav>
        <ul>
          <Link to="/explore">
            <li>explore</li>
          </Link>
          <li>contact us</li>
          <Link to="/Cart">
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
