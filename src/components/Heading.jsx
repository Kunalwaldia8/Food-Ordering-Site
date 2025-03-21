import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Heading = () => {
  //subscribing to the store using selector hook
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const [log, setlog] = useState("Login");
  return (
    <div className="w-full top-0 justify-between flex fixed z-10 bg-white shadow-md">
      <Link to={"/"}>
        <img className="w-28 h-20 p-1 rounded-full" src={LOGO_URL} />
      </Link>
      <div className="flex items-center justify-between ">
        <ul className=" mx-8 my-2  w-lg flex  items-center justify-end p-1">
          <li className="rounded-2xl hover:bg-red-700 hover:font-medium hover:text-white px-2 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="rounded-2xl hover:bg-red-700 hover:font-medium hover:text-white px-2 py-2">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="rounded-2xl hover:bg-red-700 hover:font-medium hover:text-white px-2 py-2">
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li className="rounded-2xl hover:bg-red-700 hover:font-medium hover:text-white px-2 py-2">
            <Link to={"/CartItems"}>Cart-({cartItems.length} item)</Link>
          </li>
          <li className="rounded-2xl hover:bg-red-700 hover:font-medium hover:text-white px-2 py-2">
            <button
              className="Log-btn"
              onClick={() => {
                log == "Login" ? setlog("Logout") : setlog("Login");
              }}
            >
              {log}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
