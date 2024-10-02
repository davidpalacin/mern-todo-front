// src/services/taskService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Obtener todas las tareas
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Crear una nueva tarea
export const createTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

// Actualizar una tarea
export const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedTask);
  return response.data;
};

// Eliminar una tarea
export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
