// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import { getAllTasks } from '../api';  // Ensure the path is correct

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      const tasksFromApi = await getAllTasks();
      setTasks(tasksFromApi);
    };
    fetchTasks();
  }, []); // Empty dependency array to run the effect once

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <strong>{task.name}</strong>: {task.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
