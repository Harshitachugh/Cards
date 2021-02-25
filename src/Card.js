import React from 'react';

import './index.css';

const Card=(props)=> {
  return (
    <div className='Card' style={{ backgroundImage: `url(${props.imgg})`, backgroundRepeat: "no-repeat", backgroundSize: 'contain'  }} >
    <p></p>
      <p>Name: {props.name}</p>
      <p> Actress</p>
      <p> Mumbai </p>

    </div>
  );
}
export default Card