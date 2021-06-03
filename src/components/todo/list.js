import React from 'react';
import { ListGroup, Card, Button, Badge } from 'react-bootstrap';

function TodoList(props) {
  return (
    <ListGroup>
      {props.list.map(item => (
        <Card key={item._id}>
          <Card.Header>
            <Badge 
              variant={item.complete ? 'danger' : 'success'}
              className={`complete-${item.complete.toString()}`}
              onClick={() => props.handleComplete(item._id)}
            >
              {item.complete ? 'Completed' : 'Pending'}
            </Badge>{' '}
            <div id='assignee'>{item.assignee}</div>
            <Button onClick={() => props.handleDelete(item._id)}>X</Button>
          </Card.Header>
          <Card.Body>
            <Card.Text>{item.text}</Card.Text>
            <div id='difficulty'>Difficulty: {item.difficulty}</div>
          </Card.Body>
        </Card>
      ))
      }
    </ListGroup >
  )
}

export default TodoList;
