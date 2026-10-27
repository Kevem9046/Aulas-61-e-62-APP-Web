# Entrega — Aplicativos Web

## 1. Link do repositório GitHub atualizado

**Pendente:** este projeto ainda não está associado a um repositório GitHub. Depois de criar/publicar o repositório, cole o link aqui.

## 2. Capturas das páginas e do menu

- [Página inicial e menu](./capturas/01-inicio.png)
- [Listagem de tarefas e menu](./capturas/02-listagem.png)
- [Formulário de tarefa e menu](./capturas/03-formulario.png)

## 3. Rotas implementadas

- `/` — página inicial, com lembrete, resumo do progresso e próximas tarefas.
- `/tarefas` — lista as tarefas por matéria e permite marcá-las como concluídas.
- `/tarefas/nova` — formulário para cadastrar uma tarefa e seus detalhes.
- `*` — página de endereço não encontrado, com opção para voltar ao início.

O menu usa `NavLink` para navegar entre as páginas. O componente `Botao`, adaptado de um projeto anterior, é reutilizado no formulário. As tarefas e o progresso ficam salvos no navegador.

## 4. Dificuldade encontrada e como foi resolvida

O projeto anterior estava em outra pasta e seu botão não podia ser importado diretamente sem vincular os dois projetos. Para manter a aplicação independente e facilitar a entrega, recriei/adaptei o componente `Botao` dentro deste projeto e o usei no formulário. As tarefas originais do checklist e a atualização do progresso foram preservadas durante a conversão para páginas React.

O protótipo Figma e um repositório GitHub não foram disponibilizados nesta pasta. Por isso, o checklist HTML foi usado como referência visual/funcional, e o link do GitHub permanece pendente de publicação.
