import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../components/Botao.jsx";

export default function NewTaskPage({ onAddTask }) {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const cleanSubject = subject.trim();
    const cleanTitle = title.trim();

    if (!cleanSubject || !cleanTitle) {
      setError("Preencha a matéria e a tarefa antes de salvar.");
      return;
    }

    onAddTask({
      subject: cleanSubject,
      title: cleanTitle,
      detail: detail.trim(),
    });
    navigate("/tarefas");
  }

  return (
    <>
      <section className="page-intro compact-intro">
        <p className="eyebrow">mais organização</p>
        <h1>Nova tarefa</h1>
        <p className="subtitle">
          Anote o que precisa fazer e acompanhe seu progresso.
        </p>
      </section>

      <form className="task-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="subject">Matéria</label>
        <input
          id="subject"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Ex.: História"
          maxLength={40}
          required
        />

        <label htmlFor="title">O que você precisa fazer?</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ex.: Ler o capítulo 3"
          maxLength={100}
          required
        />

        <label htmlFor="detail">
          Detalhes <span className="optional-label">(opcional)</span>
        </label>
        <textarea
          id="detail"
          name="detail"
          value={detail}
          onChange={(event) => setDetail(event.target.value)}
          placeholder="Adicione um lembrete ou prazo"
          maxLength={160}
          rows={3}
        />

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <div className="form-actions">
          <Link className="button button-secondary" to="/tarefas">
            Cancelar
          </Link>
          <Botao className="button button-primary">
            Salvar tarefa
          </Botao>
        </div>
      </form>
    </>
  );
}
