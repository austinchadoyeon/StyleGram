import React from 'react';
import axios from 'axios';

export default function RateAFit (props) {
  return (
    <div>
      <h4>{props.obj.username}</h4>
      <img src={props.obj.mainurl} />
      <h4>{props.obj.caption}</h4>
    </div>
  )
}