import React from 'react';
import axios from 'axios';

export default function RateAFit (props) {
  return (
    <figure className='imageContainer'>
      <img src={props.obj.mainurl} className='fitPics'/>
      <figcaption className='caption'>@{props.obj.username}: {props.obj.caption}</figcaption>
      <h2>hello?</h2>
    </figure>
  )
}