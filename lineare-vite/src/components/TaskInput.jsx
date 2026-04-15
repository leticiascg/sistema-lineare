import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText('');
    }
  };

  return (
    <form className="task-input-container" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          className="task-input"
          placeholder="Adicione uma nova tarefa..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </div>
    </form>
  );
};

export default TaskInput;