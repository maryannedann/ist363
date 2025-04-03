import React from 'react';
import { useState } from 'react';

function App() {

  const to_do_list = [
    { item: 'Complete Lab 11', status: 'incomplete' },
    { item: 'Review JSX Events and State', status: 'incomplete' },
  ];

  let [tasks, setTasks] = useState(to_do_list);
  let [newTask, setNewTask] = useState('');

  const handleX = (event) => {
    const listItem = event.target.parentElement;
    listItem.style.textDecoration = 'line-through';
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { item: newTask, status: 'incomplete' }]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <label htmlFor="search"></label>
      <input id="search" type="text" value={newTask} onChange={handleChange} />
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.item} <button onClick={handleX}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

