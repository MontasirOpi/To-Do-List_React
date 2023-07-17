import React, { useState } from 'react';

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          className="mr-2 px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 flex-grow"
        />

        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white font-semibold focus:outline-none hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-2 border border-gray-300"
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-600 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;
