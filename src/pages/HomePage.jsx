import React from "react";
import { Link } from "react-router-dom";
import Progress from "../components/Progress.jsx";
import TaskItem from "../components/TaskItem.jsx";

export default function HomePage({ tasks, onToggle }) {
  const pendingTasks = tasks.filter((task) => !task.done);
  const previewTasks = pendingTasks.slice(0, 3);

  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">quadro de tarefas</p>
        <h1>Plano de Estudos</h1>
        <p className="subtitle">Sábado, 15 de agosto</p>
      </section>

      <aside className="pin-note">
        <span className="pin-time">⏰ por volta das 10h</span>
        <p className="pin-title">Geografia — não esquecer!</p>
        <p className="pin-body">
          Fazer a atividade de geografia. O enunciado está salvo no seu{" "}
          <strong>perfil do WhatsApp</strong>.
        </p>
      </aside>

      <section className="overview-card" aria-label="Resumo das tarefas">
        <div>
          <p className="section-kicker">Seu progresso</p>
          <p className="overview-title">
            {pendingTasks.length
              ? "Um passo de cada vez!"
              : "Tudo concluído. Parabéns!"}
          </p>
        </div>
        <Progress tasks={tasks} />
      </section>

      <section className="preview-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">para começar</p>
            <h2>Próximas tarefas</h2>
          </div>
          <Link className="text-link" to="/tarefas">
            Ver todas <span aria-hidden="true">→</span>
          </Link>
        </div>

        {previewTasks.length ? (
          <div className="task-list">
            {previewTasks.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))}
          </div>
        ) : (
          <p className="empty-state">Não há tarefas pendentes por enquanto.</p>
        )}
      </section>

      <p className="footer-note">
        toque nos itens para marcar como feito
      </p>
    </>
  );
}
