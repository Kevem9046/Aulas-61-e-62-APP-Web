import React from "react";

export default function TaskItem({ task, onToggle }) {
  return (
    <button
      className={`task${task.done ? " done" : ""}`}
      type="button"
      role="checkbox"
      aria-checked={task.done}
      onClick={() => onToggle(task.id)}
    >
      <span className="task-check" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <polyline points="4,13 10,19 20,6" />
        </svg>
      </span>
      <span className="task-text">
        <span className="task-title">{task.title}</span>
        {task.detail && <span className="task-detail">{task.detail}</span>}
      </span>
    </button>
  );
}
