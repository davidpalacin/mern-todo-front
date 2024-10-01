// src/components/TaskList.jsx
import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className="space-y-2 p-5">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between items-center p-2 bg-gray-50 border border-gray-200 rounded-md"
        >
          <div className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task._id)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span
              className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              <strong className="text-gray-800">{task.title}</strong>: {task.description}
            </span>
          </div>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-500 hover:text-red-700 p-1 rounded-md transition-colors"
          >
            Eliminar
          </button>
        </li>
      ))}
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">No tasks available. Start adding some!</p>
      )}
    </ul>
  );
};

export default TaskList;
