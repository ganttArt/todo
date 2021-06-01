import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TodoList(props) {
  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          onClick={() => props.handleComplete(item._id)}
          variant={item.complete ? 'success' : 'danger'}
        >
          {item.text}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TodoList;
