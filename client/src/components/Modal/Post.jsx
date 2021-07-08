import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PostPic(props) {
  const stylesArray = ['-', 'Casual', 'Bohemian', 'Punk', 'Preppy', 'Trendy', 'Vintage', 'Sporty', 'Artsy', 'High Street', 'Designer', 'Hipster', 'Cowgirl/Cowboy', 'Formal']

  if (!props.show) {
    return null;
  }
  return (
    <>
      <Modal show={props.show} onHide={props.cancel}>
        <Modal.Header>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.File id='imageFile' label='image' custom />
            <Form.Group controlId='postCaption'>
              <Form.Label>Caption</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Share some more info about this pic! Like, is the outfit for datenight or everyday wear? The more info, the better other users can rate and suggest!"/>
            </Form.Group>
            <Row>
              <Col>
                <Form.Label>Brand: (optional)</Form.Label>
                <Form.Control name='brand' type='brand'/>
              </Col>
              <Col>
                <Form.Label>Price: (optional)</Form.Label>
                <Form.Control name='price' type='price'/>
              </Col>
            </Row>
            <Form.Label>Style:</Form.Label>
            <Form.Control as='select'>
              {stylesArray.map((style, index) => <option key={index}>{style}</option>)}
            </Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
          <Button onClick={props.cancel}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}