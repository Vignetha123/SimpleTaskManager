// src/components/TaskForm.js
import React, { useState } from 'react';
import { createTask } from '../api';

const TaskForm = ({ onTaskCreated }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      const newTask = {
        name: taskName,
        description: taskDescription
      };

      const createdTask = await createTask(newTask);  // Call createTask from API
      onTaskCreated(createdTask);  // Pass back the created task to update the task list
      setTaskName('');  // Clear the form
      setTaskDescription('');
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task description"
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
