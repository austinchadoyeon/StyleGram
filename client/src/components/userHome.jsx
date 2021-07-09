import React from 'react';

export default function UserHome(props) {
  return (
    <div>
      <figure>
        <img src={props.obj.mainurl} className='fitPics' />
        <figcaption className='caption'>@{props.obj.username}: {props.obj.caption}</figcaption>
        <div className='homeDetails'>
          <div className='details'>
            <h6>The Details:</h6>
            <p>Style-type: {props.obj.style}</p>
            <p>Brand: {props.obj.brand}</p>
            <p>Price: ${props.obj.price}</p>
          </div>
          <div className='ratings'>
            <h6>Ratings:</h6>
            <p>Love it: {props.obj.love}</p>
            <p>Serving looks: {props.obj.likeit}</p>
            <p>Aw almost: {props.obj.improveit}</p>
            <p>Nope: {props.obj.dislikeit}</p>
          </div>
        </div>
      </figure>
    </div>
  )
}