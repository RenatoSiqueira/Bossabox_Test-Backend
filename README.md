# VUTTR REST API

- [VUTTR REST API](#crossref-rest-api)
    - [Preâmbulo](#Preâmbulo)
    - [Meta Mínima](#meta-mínima)
    - [Meta Completa](#meta-completa)
    - [Pré Instruções](#Pré-Instruções)
    - [Documentação API](#Documentação-API)
        - [GET tools](#GET-tools)
        - [GET tools/:id](#GETtools/:id)
        - [POST tools](#POST-tools)
        - [PATCH tools/:id](#PATCH-tools/:id)
        - [DELETE tools/:id](#DELETE-tools/:id)
    - [Rodando Testes](#Rodando-Testes)
    - [Conteinerização da aplicação](#Conteinerização-da-aplicação)
    - [Online](#online)
    - [To-Do](#to-do)

## Preâmbulo
Sua tarefa é construir uma API e banco de dados para a [aplicação VUTTR (Very Useful Tools to Remember)](https://bossaboxbackend.herokuapp.com/tools). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Utilize um repositório Git (público, de preferência) para versionamento e disponibilização do código.

## Meta Mínima
    Uma aplicação contendo uma API real simples, sem autenticação, que atenda os requisitos descritos abaixo, fazendo requisições à um banco de dados para persistência; README.md contendo informações básicas do projeto e como executá-lo; API Blueprint ou Swagger da aplicação. 

## Meta Completa
    Os seguintes itens não são obrigatórios, mas darão mais valor ao seu trabalho (os em negrito são mais significativos para nós, se destacando como características para se tornar Tech Lead em squads)   
     - Uso de ferramentas externas que facilitem o seu trabalho; 
     - Cuidados especiais com otimização, padrões, entre outros
     - Migrations ou script para configuração do banco de dados utilizado
     - Testes; 
     - Conteinerização da aplicação; 
     - Autenticação e autorização (OAuth, JWT); 
     - Pipelines de CI/CD (GitLab, CircleCI, TravisCI, etc); 
     - Deploy em ambientes reais, utilizando serviços de cloud externos (AWS, Heroku, GCP, etc); 
     - Sugestões sobre o challenge embasadas em alguma argumentação. 

### Pré Instruções
```
1. Yarn ou Npm Install

2. Criar arquivo .env conforme modelo default alterando os dados necessários.

3. Yarn start ou Npm start
```

### Documentação API
### GET tools
```
Descrição: Retorna todos as 'Tools' cadastradas

GET /tools
```
Resposta:
```
[ { 
    id: 1, // ou qualquer outro identificador
    title: "Notion", 
    link: "https://notion.so", 
    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ", 
    tags: [ "organization", "planning", "collaboration", "writing", "calendar" ] 
  },
  { 
    id: 2, 
    title: "json-server", 
    link: "https://github.com/typicode/jsonserver", 
    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.", 
    tags: [ "api", "json", "schema", "node", "github", "rest" ] 
  },
  { 
    id: 3, 
    title: "fastify", 
    link: "https://www.fastify.io/", 
    description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.", 
    tags: [ "web", "framework", "node", "http2", "https", "localhost" ] 
  }
] 
```

### GET tools/:id
```
Descrição: Retorna apenas as 'Tools' que contenham a tag solicitada

GET /tools?tag=node (node é a tag sendo buscada neste exemplo)
```
Resposta:
```
[ 
  { 
    id: 2, // ou qualquer outro identificador 
    title: "json-server", 
    link: "https://github.com/typicode/json-server", 
    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.", 
    tags: [ "api", "json", "schema", "node", "github", "rest" ] 
  },
  { 
    id: 3, 
    title: "fastify", 
    link: "https://www.fastify.io/", 
    description: "Extremely fast and simple, lowoverhead web framework for NodeJS. Supports HTTP2.", 
    tags: [ "web", "framework", "node", "http2", "https", "localhost" ] 
  }
] 
```

### POST tools
```
Descrição: Adicionar novo registro

POST /tools
Content-Type: application/json
```
Body:
```
{ 
  "title": "hotel", 
  "link": "https://github.com/typicode/hotel", 
  "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.", 
  "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"] 
} 
```

Resposta:
```
Status: 201 Created
Content-Type: application/json
```
Body:
```
{ 
  "title": "hotel", 
  "link": "https://github.com/typicode/hotel", 
  "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.", 
  "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
  "id": 5 // ou qualquer outro identificador 
}
```

### PATCH tools/:id
```
Descrição: Editar registro

PATCH /tools/:id
Content-Type: application/json
```
Body:
```
{ 
  "title": "New Name"
} 
```

Resposta:
```
Status: 201 Created
Content-Type: application/json
```
Body:
```
{ 
  "title": "New Name", 
  "link": "https://github.com/typicode/hotel", 
  "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.", 
  "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
  "id": 5 // ou qualquer outro identificador 
}
```

### DELETE tools/:id
```
Descrição: Remover registro

DELETE /tools/:id
```
Resposta:
```
Status: 204 No Content
```

### Rodando Testes
Os testes foram elaborados utilizando Chai, Mocha e Request
```
yarn test
```

# Conteinerização da aplicação
O arquivo Dockerfile contém um script simples, mas funcional. Os seguintes comandos geram uma nova imagem e a inicializam para uso:
```
docker build -t bossabox-backend-challenge .
docker run -p 3000:3000 bossabox-backend-challenge:latest
```

# Online
Você pode testa-lo em [https://bossaboxbackend.herokuapp.com/tools]((https://bossaboxbackend.herokuapp.com/tools))
```
Dados Adicionais:
- Hospedagem: Heroku
- Banco de Dados: mLab
- Continuous Deployment on Github Configurado
```

# To-Do
```
- Swagger
- Outras rotas, métodos, meios de autenticação com usuários, etc
- Autenticação e autorização (OAuth, JWT)
```