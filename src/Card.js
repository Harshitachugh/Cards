import React from 'react';

import './index.css';


const Card=(props)=> {
  return (
    <div className='Card' style={{ backgroundImage: props.imgg}}>
    <p><img src={props.imgg} class="CelebImage"></img></p>
      <p>Name: {props.name}</p>
      <p> Actress</p>
      <p> Mumbai </p>

    </div>
  );
}
export default Card