//import logo from './logo.svg';
import personcard from './index'
import './App.css';
import React from "react";
import Card from './Card';
import asin from './assets/asin.jpg'
import yami from './assets/yami.jpg'
import preety from './assets/preety.jpg'
import discount from './assets/discount.JPG'
import { Header } from './components/Header';


const App = () => {
  return (




    <div className="App" class="app-main">
      <Header />
      <br />
      <div>
        <img src={discount} class="discount"></img>
      </div>
      <div class="cardd">
        <Card name={"Asin"} imgg={asin} />
        <Card name={"Yami Gautam"} imgg={yami} />
        <Card name={"Preeti Zinta"} imgg={preety} />
      </div>

    </div>
  );
}

export default App;
