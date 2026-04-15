import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <button
          className="checkbox"
          onClick={() => onToggleComplete(task.id)}
          aria-label={task.completed ? 'Marcar como pendente' : 'Marcar como concluída'}
        >
          {task.completed && <span className="checkmark">✓</span>}
        </button>
        <p className="task-text">{task.text}</p>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label="Excluir tarefa"
      >
        <span className="delete-icon">×</span>
      </button>
    </div>
  );
};

export default TaskCard;