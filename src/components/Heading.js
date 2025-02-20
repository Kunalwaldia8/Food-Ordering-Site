import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Heading = () => {
  const [log, setlog] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="navlist">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>Contact Us</li>
        </ul>
        <button
          className="Log-btn"
          onClick={() => {
            log == "Login" ? setlog("Logout") : setlog("Login");
          }}
        >
          {log}
        </button>
      </div>
    </div>
  );
};

export default Heading;
