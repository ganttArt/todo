import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Card } from 'react-bootstrap';

import './todo.scss';

const todoAPI = 'https://chrisgantt-api-server.herokuapp.com/todo';

const ToDo = () => {

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item.complete = false;
    axios.post(todoAPI, item)
      .then(res => {
        console.log(res);
        const savedItem = res.data;
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      axios.put(url, item)
        .then(res => {
          const savedItem = res.data;
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    axios.get(todoAPI)
      .then(res => {
        const todos = res.data;
        setList(todos);
      })
      .catch(console.error);
  };

  const handleDelete = (id) => {
    axios.delete(`${todoAPI}/${id}`)
      .then(res => {
        _getTodoItems();
      })
      .catch(console.error); 
  }

  useEffect(_getTodoItems, []);

  return (
    <div id='card-container'>
      <Card id='form-list-body'>
        <Card.Header as="h2">There are {list.filter(item => !item.complete).length} Items To Complete</Card.Header>
        <Card.Body>
          <section className="todo">
            <div>
              <TodoForm
                handleSubmit={addItem}
              />
            </div>
            <div>
              <TodoList
                list={list}
                handleComplete={toggleComplete}
                handleDelete={handleDelete}
              />
            </div>
          </section>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ToDo;
