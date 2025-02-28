// src/App.js
import React from 'react';
import TaskList from './components/TaskList';  // Make sure the path is correct

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;
