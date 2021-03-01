//import logo from './logo.svg';
import personcard from './index'
import './App.css';
import React from "react";
import Card from './Card';
import asin from './assets/asin.jpg'
import priya from './assets/priya.jpg'
import preety from './assets/preety.jpg'
import discount from './assets/discount.JPG'
import { Header } from './components/Header';
import tannaz from './assets/tannaz.jpg'
import sharman from './assets/sharman.jpg'
import bhaktyar from './assets/bhaktyar.jpg'
import shefali from './assets/shefali.jpg'
import vishy from './assets/vishy.jpg'
import urvashi from './assets/urvashi.jpg'
import yami from './assets/yami.jpg'
import guahar from './assets/guahar.jpg'
import kapil from './assets/kapil.png'
import { Route ,Switch} from 'react-router-dom';
import { First } from 'pages/First/first';
//import {Profile , Profilename} from './pages/profile';

const Home=()=>{
  return(
    <div class="cardd">
        <Card name={"Asin "} imgg={asin} profession={"Actress"} />
        <Card name={"Priya Varrier  "} imgg={priya} profession={"Actress"} />
        <Card name={"Preeti Zinta "} imgg={preety} profession={"Actress"} />
        <Card name={"Tannaz Irani "} imgg={tannaz} profession={"Actress"} />
        <Card name={"Sharman Joshi "} imgg={sharman} profession={"Actor"} />
        <Card name={"Bhaktayar Irani "} imgg={bhaktyar} profession={"Actor"} />
        <Card name={"Shefali Bagga "} imgg={shefali} profession={"Anchor"} />
        <Card name={"Vishvanathan Anand "} imgg={vishy} profession={"Grandmaster"} />
        <Card name={"Urvashi Rautela "} imgg={urvashi} profession={"Actress"} />
        <Card name={"Yami Guatam "} imgg={yami} profession={"Actress"} />
        <Card name={"Kapil Dev "} imgg={kapil} profession={"Cricketer"} />
        <Card name={"Guahar Khan "} imgg={guahar} profession={"Actress"} />
        
      </div>

  )
    
  
}

const App = () => {
  return (




    <div className="App" class="app-main">
      <Header />
      <br />
      <div>
        <img src={discount} class="discount"></img>
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/profile/:id' component={First} />
      </Switch>
      
         </div>
  );
}

export default App;
