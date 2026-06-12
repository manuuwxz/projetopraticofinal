# 📝 App de Lista de Tarefas (To-Do App)

Um aplicativo de lista de tarefas dinâmico e responsivo desenvolvido com **React.js**. Este projeto foi criado para aplicar conceitos modernos de desenvolvimento front-end, incluindo componentização, gerenciamento de estado e estilização dinâmica via CSS-in-JS.

## ✨ Funcionalidades

- ➕ **Adicionar tarefas:** Crie novas tarefas rapidamente.
- ✅ **Marcar como concluída:** Risque tarefas finalizadas da sua lista.
- 🗑️ **Remover tarefas:** Apague os itens que não precisa mais.
- 🔍 **Filtragem inteligente:** Alterne a visualização entre *Todas*, *Ativas* e *Concluídas*.
- 🌓 **Tema Dinâmico:** Botão para alternar perfeitamente entre os modos **Claro ☀️** e **Escuro 🌙**.

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** - Biblioteca JavaScript para construção da interface.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build super rápida.
- **[Styled Components](https://styled-components.com/)** - Estilização baseada em componentes com suporte a temas dinâmicos.
- **JavaScript (ES6+)** - Lógica e manipulação de arrays.

## 🚀 Como executar o projeto na sua máquina

Antes de começar, você vai precisar ter o [Node.js](https://nodejs.org) e o [Git](https://git-scm.com/) instalados no seu computador.

### 1. Clone este repositório
Abra o seu terminal e digite:
```bash
git clone cole-o-link-deste-repositorio-aqui.git
```

### 2. Acesse a pasta do projeto
```bash
cd todo-app
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```
> O servidor iniciará localmente. Acesse `http://localhost:5173/` no seu navegador para utilizar o aplicativo.

## 🗂️ Arquitetura e Estrutura de Pastas

O projeto foi organizado separando claramente a lógica de interface (Componentes) das regras de interface (Estilos), facilitando a manutenção e escalabilidade do código:

```text
src/
├── components/
│   ├── Filtros.jsx          # Componente de filtragem de status
│   ├── FormularioTarefa.jsx # Input e botão de submissão
│   ├── Header.jsx           # Cabeçalho e botão de troca de tema
│   └── TarefaItem.jsx       # Estrutura individual de cada tarefa
├── styles/
│   ├── components/
│   │   ├── Header.styles.js # Estilos exclusivos do cabeçalho
│   │   └── Tarefa.styles.js # Estilos do formulário, itens e filtros
│   ├── GlobalStyle.js       # Reset de CSS e tipografia global
│   └── themes.js            # Dicionário de variáveis de cores (Light/Dark)
├── App.jsx                  # Componente raiz e centralizador de estados
└── main.jsx                 # Ponto de entrada do React
```