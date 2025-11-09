
# Projeto Filmes — Fullstack (React + Express)

Aplicação full-stack para gerenciar um catálogo de filmes.

Trabalho final da disciplina de Frameworks Web. Aplicação full-stack para gerenciar um catálogo de filmes, desenvolvida com **React (TypeScript)** no front-end e **Express.js** no back-end, com acesso a um banco de dados **SQLite** (arquivo) através do **Prisma**.

## Integrantes

- Nielson
- Anderson
- Davi

---

- Frontend: React + Vite (TypeScript)
- Backend: Express.js + Prisma
- Banco (padrão): SQLite (arquivo: `backend/prisma/dev.db`)


## 🚀 Guia de Instalação

Para configurar o projeto em sua máquina, siga estes passos.

### 1. Clonar o Repositório

```bash
git clone https://github.com/nielsongomesdev/projeto-filmes-web.git
cd projeto-filmes-web
```

### 2. Configurar o Banco de Dados (padrão: SQLite)

O back-end está configurado para usar **SQLite** por padrão. O arquivo do banco está em `backend/prisma/dev.db` (o datasource em `prisma/schema.prisma` aponta para `file:./dev.db`).


Para criar as tabelas/migrações (usando Prisma):

```bash
cd backend
npx prisma migrate dev --name init
```



### 3. Instalar as Dependências

Este projeto é um "monorepo". Você precisa instalar as dependências do `frontend` e do `backend` separadamente.

```bash
# 1. Instale as dependências do Front-end
cd frontend
npm install

# 2. Volte para a raiz e instale as do Back-end
cd ../backend
npm install
```

---

## 💻 Como Rodar o Projeto

Você precisará de **dois terminais** abertos para rodar o projeto completo.

### Terminal 1: Rodar o Back-end (API)

```bash
# Navegue até a pasta do back-end
cd backend

# Inicie o servidor em modo de desenvolvimento (com Nodemon)
npm run dev
```

O servidor estará rodando em `http://localhost:3000`.

### Terminal 2: Rodar o Front-end (React)

```bash
# Navegue até a pasta do front-end
cd frontend

# Inicie o cliente React com Vite
npm run dev
```

O Vite abrirá o site no seu navegador (geralmente em `http://localhost:5173`).


## 🤝 Como Contribuir (Fluxo de Trabalho)

Para evitar conflitos, **NUNCA** envie código direto para a branch `main`.

1.  **Sincronize:** Antes de começar, puxe as últimas atualizações.
    ```bash
    git pull origin main
    ```
2.  **Crie sua Branch:** Crie uma nova branch para sua tarefa.
    ```bash
    # Ex: git checkout -b feat-tela-login
    git checkout -b <tipo-da-branch>/<nome-da-tarefa>
    ```
3.  **Trabalhe:** Faça suas alterações no código.
4.  **Salve (Commit):** Salve seu progresso com uma mensagem clara.
    ```bash
    git add .
    git commit -m "feat: implementa formulário de cadastro de filmes"
    ```
5.  **Envie (Push):** Envie sua branch para o repositório remoto.
    ```bash
    git push origin <nome-da-sua-branch>
    ```
6.  **Abra um Pull Request (PR):** No GitHub, abra um "Pull Request" da sua branch para a `main` para que o time possa revisar o código.
```