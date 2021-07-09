import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {FcLike, FcDislike, } from 'react-icons/fc';
import {TiThumbsOk, TiHeartHalfOutline} from 'react-icons/ti';

function Help (props) {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <Modal show={props.show} onHide={props.onClick}>
        <Modal.Header>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Getting started:</h5>
          <h6>Welcome to StyleGram! Post a pic and get some opinions about your outfit. </h6>
          <p>Please follow this friendly rubric when it comes to rating fits and evaluating your own. Reminder: Negative comments or harrassment will NOT be tolerated!</p>
          <ul>
            <li><FcLike/>: Love it! This outfit checks all the boxes. No question about it.</li>
            <li><TiThumbsOk/>: Serving looks! Everything about this is great except maybe a tiny little detail. Maybe the pants could be cuffed or the shirt is wrinkly.</li>
            <li><TiHeartHalfOutline/>: Aw almost! Don't love it but don't hate it either. Maybe the price is too much for what it is or the size is just a little off.</li>
            <li><FcDislike/>: Nope! This is doing YOU a disservice. Plenty of fish out in the sea so let this one go.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.cancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      )
}

export default Help;