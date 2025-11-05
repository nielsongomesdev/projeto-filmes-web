Projeto CRUD de Filmes (Frameworks Web)
Trabalho final da disciplina de Frameworks Web. Aplicação para gerenciar o cadastro de Filmes , desenvolvida com React (TypeScript) no front-end e Express.js no back-end.



Integrantes:

Nielson

Anderson

Davi

🚀 Guia de Instalação (Para o Grupo)
Para configurar o projeto na sua máquina, siga estes passos.

1. Clonar o Repositório
Primeiro, clone o projeto do GitHub para o seu computador.

Bash

git clone https://github.com/nielsongomesdev/projeto-filmes-web.git

# Entre na pasta que você acabou de clonar
cd projeto-filmes-web
2. Instalar as Dependências (Obrigatório)
Este projeto é um "monorepo", o que significa que temos dois projetos em um (frontend e backend). Você precisa instalar as dependências de ambos, separadamente.

Bash

# 1. Instale o Front-end (React + TS)
cd frontend
npm install

# 2. Volte para a raiz e instale o Back-end (Express)
cd ..
cd backend
npm install
Pronto! Seu ambiente está configurado igual ao de todos no grupo.

💻 Como Rodar o Projeto
Você precisará de dois terminais abertos para rodar o projeto completo.

Terminal 1: Rodar o Back-end (API)
Bash

# Navegue até a pasta do back-end
cd backend

# Inicie o servidor
npm start 
# (ou 'npm run dev' se configurarmos o nodemon)
O servidor estará rodando (ex: em http://localhost:3000)

Terminal 2: Rodar o Front-end (React)
Bash

# Navegue até a pasta do front-end
cd frontend

# Inicie o cliente React (Vite)
npm run dev
O Vite vai abrir o site no seu navegador (ex: em http://localhost:5173)

🤝 Como Contribuir (Fluxo de Trabalho)
Para evitar conflitos, NUNCA envie código direto para a branch main.

Sincronize: Antes de começar a trabalhar, sempre puxe as últimas atualizações: git pull origin main

Crie sua Branch: Crie uma nova branch para a sua tarefa: git checkout -b nome-da-sua-tarefa (Ex: git checkout -b feat-tela-login)

Trabalhe: Faça suas alterações no código.

Salve (Commit): Salve seu progresso na sua branch: git add . git commit -m "O que você fez (ex: cria formulário de cadastro)"

Envie (Push): Envie sua branch para o GitHub: git push origin nome-da-sua-tarefa

Abra um Pull Request (PR): Vá ao GitHub e abra um "Pull Request" (PR) da sua branch para a main para que o time possa revisar.