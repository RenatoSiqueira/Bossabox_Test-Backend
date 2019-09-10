# O mínimo necessário 
- Uma aplicação contendo uma API real simples, sem autenticação, que atenda os requisitos descritos abaixo, fazendo requisições à um banco de dados para persistência; README.md contendo informações básicas do projeto e como executá-lo; API Blueprint ou Swagger da aplicação. 

# How-to
```
yarn install
yarn start
```

# Docker
```
docker build -t bossabox-backend-challenge .
docker run -p 3000:3000 bossabox-backend-challenge:latest
```

# Online
https://bossaboxbackend.herokuapp.com/tools

# To-Do
- Swagger
- Outras rotas, métodos, meios de autenticação com usuários, etc
- Otimizações
- Migrations ou script para configuração do banco de dados utilizado
- [DONE] Testes
- [IN PROGRESS] Conteinerização da aplicação
- Autenticação e autorização (OAuth, JWT)
- Pipelines de CI/CD (GitLab, CircleCI, TravisCI, etc)
- Deploy em ambientes reais
- [DONE] utilizando serviços de cloud externos (Heroku)