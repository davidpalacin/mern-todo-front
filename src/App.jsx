// src/App.jsx
import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksFromServer = await getTasks();
      setTasks(tasksFromServer);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = async (id) => {
    const taskToToggle = tasks.find((task) => task._id === id);
    const updatedTask = await updateTask(id, { ...taskToToggle, completed: !taskToToggle.completed });
    setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Built with MERN stack
        </h1>
          <TaskForm onTaskSubmit={handleAddTask} />
          <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
      </div>
    </div>
  );
};

export default App;


