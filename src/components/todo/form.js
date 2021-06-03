import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = (props) => {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    const updatedItem = item;
    updatedItem['difficulty'] = '1';
    updatedItem[e.target.name] = e.target.value;
    console.log(item);
    setItem(updatedItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  return (
    <div id='form-container'>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="text">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control name='text' type="text" placeholder="Item Details" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="assigneecg">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="difficultycg">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control name="difficulty" type="range" defaultValue="1" min="1" max="5" onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add item
        </Button>
      </Form>
    </div>
  )
}

export default TodoForm;
