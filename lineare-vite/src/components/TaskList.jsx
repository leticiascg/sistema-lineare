import React from 'react';
import TaskCard from './TaskCard';
import './TaskList.css';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list-container">
      <div className="task-section">
        <div className="section-header">
          <h2 className="section-title">
            Ativas
            <span className="count-badge">{activeTasks.length}</span>
          </h2>
        </div>
        <div className="tasks-grid">
          {activeTasks.length === 0 ? (
            <div className="empty-state">
              <p className="empty-text">Nenhuma tarefa ativa</p>
              <p className="empty-subtext">Adicione uma nova tarefa acima</p>
            </div>
          ) : (
            activeTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
              />
            ))
          )}
        </div>
      </div>

      {completedTasks.length > 0 && (
        <div className="task-section">
          <div className="section-header">
            <h2 className="section-title">
              Concluídas
              <span className="count-badge completed">{completedTasks.length}</span>
            </h2>
          </div>
          <div className="tasks-grid">
            {completedTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;