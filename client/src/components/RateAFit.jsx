import React, {useState} from 'react';
import axios from 'axios';
import {FcLike, FcDislike, } from 'react-icons/fc';
import {TiThumbsOk, TiHeartHalfOutline} from 'react-icons/ti';

export default function RateAFit (props) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className='mainContainer'>
      <figure className='imageContainer'>
        <img src={props.obj.mainurl} className='fitPics'/>
        <figcaption className='caption'>@{props.obj.username}: {props.obj.caption}</figcaption>
        <div className='details'>
          <h6>The Details:</h6>
          <p>Style-type: {props.obj.style}</p>
          <p>Brand: {props.obj.brand}</p>
          <p>Price: ${props.obj.price}</p>
        </div>
        <h3>
          <FcLike />
          <TiThumbsOk/>
          <TiHeartHalfOutline/>
          <FcDislike/>
        </h3>
      </figure>
    </div>
  )
}