import './App.css';
import React from "react";
import Card from './Card';
import asin from './assets/asin.jpg'
import priya from './assets/priya.jpg'
import preety from './assets/preety.jpg'
import discount from './assets/discount.JPG'
import tannaz from './assets/tannaz.jpg'
import sharman from './assets/sharman.jpg'
import bhaktyar from './assets/bhaktyar.jpg'
import shefali from './assets/shefali.jpg'
import vishy from './assets/vishy.jpg'
import urvashi from './assets/urvashi.jpg'
import yami from './assets/yami.jpg'
import guahar from './assets/guahar.jpg'
import kapil from './assets/kapil.png'

export const Home=()=>{
    
    return(
        <div class="discount">
        <img src={discount} class="discount"></img>
      
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
        </div>
  
    )
}