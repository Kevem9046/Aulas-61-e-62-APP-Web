import React from "react";

export default function Progress({ tasks }) {
  const completed = tasks.filter((task) => task.done).length;
  const percentage = tasks.length ? (completed / tasks.length) * 100 : 0;

  return (
    <div className="progress-wrap">
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Progresso das tarefas"
        aria-valuemin={0}
        aria-valuemax={tasks.length}
        aria-valuenow={completed}
      >
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="progress-label">
        {completed}/{tasks.length}
      </span>
    </div>
  );
}
