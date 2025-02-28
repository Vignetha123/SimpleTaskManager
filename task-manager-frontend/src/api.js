// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/tasks'; // Your backend API URL

// Fetch all tasks
export const getAllTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Returns the data from the API
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];  // Return empty array in case of error
  }
};

// Create a task
export const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    return null;
  }
};

// Update a task
export const updateTask = async (id, task) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    return null;
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
