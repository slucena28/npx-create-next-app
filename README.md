# 🌍 Portal Turístico

Projeto desenvolvido com **Next.js** para apresentar destinos turísticos de forma organizada e responsiva.

## 📋 Descrição

O Portal Turístico é uma aplicação web que permite visualizar uma lista de destinos turísticos através de cartões contendo imagem, nome e descrição. O projeto utiliza componentes reutilizáveis, navegação entre páginas e estilização com CSS Modules.

## 🚀 Tecnologias Utilizadas

* Next.js
* React
* CSS Modules
* JavaScript

## 📁 Estrutura do Projeto

```text
portal-turistico/
├── public/
│   ├── paris.jpg
│   ├── rio.jpg
│   ├── tokyo.jpg
│   └── roma.jpg
│
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Layout.module.css
│   │   ├── CardDestino.jsx
│   │   └── CardDestino.module.css
│   │
│   ├── pages/
│   │   ├── index.jsx
│   │   └── destinos.jsx
│   │
│   └── styles/
│       ├── Home.module.css
│       ├── Destinos.module.css
│       └── globals.css
│
└── package.json
```

## ✨ Funcionalidades

* Página inicial com apresentação do portal.
* Página de listagem de destinos turísticos.
* Menu de navegação entre páginas.
* Componentes reutilizáveis.
* Layout compartilhado com Header e Footer.
* Estilização utilizando CSS Modules.
* Renderização dinâmica dos destinos utilizando `map()`.

## 📌 Dados dos Destinos

Os destinos são simulados localmente através de um array contendo:

* id
* nome
* imagem
* descricao

Exemplo:

```javascript
const destinos = [
  {
    id: 1,
    nome: "Paris",
    imagem: "/paris.jpg",
    descricao: "A cidade luz."
  }
];
```

## ⚙️ Instalação e Execução

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/portal-turistico.git
```

Acesse a pasta do projeto:

```bash
cd portal-turistico
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

## 🎯 Requisitos Atendidos

* ✔ Criação do projeto com Next.js
* ✔ Estrutura organizada de pastas
* ✔ Página inicial
* ✔ Página de destinos
* ✔ Componente CardDestino
* ✔ Componente Layout
* ✔ Navegação com next/link
* ✔ CSS Modules
* ✔ Array local de dados
* ✔ Renderização com map()

## 👩‍💻 Autora

Sabrina
Projeto desenvolvido para fins acadêmicos e de aprendizado em Next.js.
