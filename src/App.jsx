import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import NewTaskPage from "./pages/NewTaskPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { initialTasks } from "./data.js";

const STORAGE_KEY = "plano-de-estudos-tasks";

function readTasks() {
  const savedTasks = localStorage.getItem(STORAGE_KEY);
  if (!savedTasks) return initialTasks;

  try {
    const parsedTasks = JSON.parse(savedTasks);
    if (
      Array.isArray(parsedTasks) &&
      parsedTasks.every(
        (task) =>
          task &&
          typeof task.id === "string" &&
          typeof task.subject === "string" &&
          typeof task.title === "string" &&
          typeof task.done === "boolean",
      )
    ) {
      return parsedTasks;
    }
    console.error("Os dados salvos das tarefas têm um formato inválido.");
  } catch (error) {
    console.error("Não foi possível ler as tarefas salvas.", error);
  }

  return initialTasks;
}

export default function App() {
  const [tasks, setTasks] = useState(readTasks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function addTask({ subject, title, detail }) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        subject,
        color: "blue",
        title,
        detail,
        done: false,
      },
    ]);
  }

  return (
    <div className="site-frame">
      <div className="board">
        <header className="site-header">
          <NavLink className="brand" to="/" aria-label="Meu quadro, início">
            <span className="brand-icon" aria-hidden="true">
              ✎
            </span>
            <span>
              <span className="brand-name">Meu quadro</span>
              <span className="brand-caption">organize seus estudos</span>
            </span>
          </NavLink>
          <nav className="main-nav" aria-label="Navegação principal">
            <NavLink to="/" end>
              Início
            </NavLink>
            <NavLink to="/tarefas">Tarefas</NavLink>
            <NavLink className="nav-add" to="/tarefas/nova">
              <span aria-hidden="true">+</span> Nova tarefa
            </NavLink>
          </nav>
        </header>

        <main className="page-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage tasks={tasks} onToggle={toggleTask} />}
            />
            <Route
              path="/tarefas"
              element={<TasksPage tasks={tasks} onToggle={toggleTask} />}
            />
            <Route
              path="/tarefas/nova"
              element={<NewTaskPage onAddTask={addTask} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
