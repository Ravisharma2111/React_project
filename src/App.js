// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Button from "./Button/Button";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

function App() {
 
  return (
    <div className="App" >
<Navbar/>
<Body/>
<Button/>
<Section/>
<Footer/>
    </div>
  );
}

export default App;
