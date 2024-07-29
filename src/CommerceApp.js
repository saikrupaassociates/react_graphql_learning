import React from "react";
import { BrowseRouter as Router, Routes, Route } from "react-router-dom";
import './components/css/CommerceApp.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";


function CommerceApp () {
  return (
    <div className="app-main">      
    <Header message={"Amy Pet Store"}/>
    <div className="app-main-body">
      <HomePage />
    </div>
    <Footer message={"Footer goes Here"}/> 
</div>
  );
};

export default CommerceApp;