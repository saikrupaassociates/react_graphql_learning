import React from "react";
import './css/Footer.css';

function Footer(props) {
    return (
      <header>
        <div className="footer-main">
            <h1>{props.message}</h1>
        </div>
      </header>
    );
  }
  
  export default Footer;
