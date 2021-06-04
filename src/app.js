import React from 'react';
import NavBar from './components/navbar';
import ToDo from './components/todo/todo.js';
import SettingsContext from './context/settings';

function App() {
  return (
    <SettingsContext>
      <NavBar />
      <ToDo />
    </SettingsContext>
  )
}

export default App;
