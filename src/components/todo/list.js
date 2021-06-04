import React, { useContext } from 'react';
import { SettingsContext } from '../../context/settings';
import { ListGroup, Card, Button, Badge } from 'react-bootstrap';
import { If, Then, Else } from 'react-if';

// Project todo: refactor Card into it's own component

function TodoList(props) {

  const context = useContext(SettingsContext);

  return (
    <ListGroup>
      {props.list.map(item => (
        <If condition={context.displayCompleted}>
          <Then>
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
          </Then>
          <Else>
            <If condition={!item.complete}>
              <Then>
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
              </Then>
            </If>
          </Else>
        </If>
      ))
      }
    </ListGroup >
  )
}

export default TodoList;
