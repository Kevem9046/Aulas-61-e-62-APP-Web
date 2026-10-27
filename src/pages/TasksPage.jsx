import React from "react";
import Progress from "../components/Progress.jsx";
import SubjectSection from "../components/SubjectSection.jsx";
import { groupTasks } from "../data.js";

export default function TasksPage({ tasks, onToggle }) {
  const groups = groupTasks(tasks);

  return (
    <>
      <section className="page-intro compact-intro">
        <p className="eyebrow">sua lista</p>
        <h1>Minhas tarefas</h1>
        <p className="subtitle">Marque cada atividade conforme concluir.</p>
      </section>

      <div className="list-summary">
        <span>{tasks.length} atividades no seu quadro</span>
        <Progress tasks={tasks} />
      </div>

      {groups.length ? (
        <div className="subjects">
          {groups.map((group) => (
            <SubjectSection
              key={group.subject}
              group={group}
              onToggle={onToggle}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          Seu quadro está vazio. Adicione uma tarefa para começar.
        </p>
      )}

      <p className="footer-note">toque nos itens para marcar como feito</p>
    </>
  );
}
