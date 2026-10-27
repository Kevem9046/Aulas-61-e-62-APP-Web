export const initialTasks = [
  {
    id: "geografia-1",
    subject: "Geografia",
    color: "orange",
    title: "Abrir o perfil do WhatsApp e ler o enunciado da atividade",
    detail: "Depois, fazer a atividade completa",
    done: false,
  },
  {
    id: "portugues-1",
    subject: "Português",
    color: "blue",
    title: "Ler sobre os repertórios",
    detail: "Preparação para a próxima aula",
    done: false,
  },
  {
    id: "matematica-1",
    subject: "Matemática",
    color: "purple",
    title: "Estudar matemática",
    detail: "",
    done: false,
  },
  {
    id: "fisica-1",
    subject: "Física",
    color: "pink",
    title: "Revisar as questões de física",
    detail: "",
    done: false,
  },
  {
    id: "simulados-1",
    subject: "Simulados",
    color: "green",
    title: "Revisar os simulados que já fiz",
    detail: "",
    done: false,
  },
  {
    id: "moodle-1",
    subject: "Moodle",
    color: "yellow",
    title: "Fazer as atividades pendentes do Moodle",
    detail: "",
    done: false,
  },
  {
    id: "moodle-2",
    subject: "Moodle",
    color: "yellow",
    title: "Conferir se tem mais alguma atividade que eu não vi",
    detail: "",
    done: false,
  },
  {
    id: "biologia-1",
    subject: "Biologia",
    color: "blue",
    title: "Estudar biologia",
    detail: "E praticar questões do conteúdo",
    done: false,
  },
];

export function groupTasks(tasks) {
  return tasks.reduce((groups, task) => {
    const group = groups.find((item) => item.subject === task.subject);
    if (group) {
      group.tasks.push(task);
    } else {
      groups.push({
        subject: task.subject,
        color: task.color,
        tasks: [task],
      });
    }
    return groups;
  }, []);
}
