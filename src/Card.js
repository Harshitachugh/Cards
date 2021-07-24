import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

import './index.css';

const Card = (props) => {
  return (
    <Link to={`/Profile/${props.name}`} >

      <div className='Card' style={{ backgroundImage: `url(${props.imgg})`, backgroundRepeat: "no-repeat", backgroundSize: 'contain' }} >
        <button className='btn'>  </button>

        <div class="bottom-left">

          <p><u><b>{props.name}</b></u></p></div>
        <div class="bottom-left2">{props.profession}

        </div>

      </div>
    </Link>

  );
}
export default Card