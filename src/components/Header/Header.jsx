import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <img
        src="https://img.icons8.com/?size=512&id=120517&format=png"
        alt="learning languages"
        className="logo"
      />
      <h1>React Words Learning App</h1>
    </div>
  );
};

export default Header;
