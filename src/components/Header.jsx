import React from "react";
import './css/Header.css';


function Header(params) {
    return (
      <header className="header">
        <div className="container">
            <h1>{params.message}</h1>
        </div>
      </header>
    );
  }
  
  export default Header;
