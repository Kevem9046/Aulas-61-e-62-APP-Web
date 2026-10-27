import React from "react";
import TaskItem from "./TaskItem.jsx";

export default function SubjectSection({ group, onToggle }) {
  return (
    <section className="subject">
      <h2 className={`subject-tag chalk-${group.color}`}>
        <span className="subject-dot" aria-hidden="true" />
        {group.subject}
      </h2>
      <div className="task-list">
        {group.tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </div>
    </section>
  );
}
