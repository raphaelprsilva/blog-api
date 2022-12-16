<div align="center">
  <img src="./public/blogs-api-logo.svg" alt="Blogs API" />
</div>

---

## :memo: Descrição do Projeto

<p align="center">Este projeto é uma API desenvolvida com Express e um banco de dados MySQL para a produção de conteúdo para um blog!</p>

## 📋 Tabela de conteúdos

<!--ts-->

- [🎯 Objetivo do projeto](#🎯-objetivo-do-projeto)
- [📝 O que pratiquei](#📝-o-que-pratiquei)
- [🛠 Tecnologias utilizadas](#🛠-tecnologias-utilizadas)
- [🚀 Rodando o projeto na sua máquina](#🚀-rodando-o-projeto-na-sua-máquina)
  - [📍Pre Requisitos](#📍-pre-requisitos)
- [📚 Documentação da API](#📚-documentação-da-api)
- [👉🏾 Status do projeto](#👉🏾-status-do-projeto)
- [🔗 Link para acessar o projeto](#🔗-link-para-acessar-o-projeto)
- [🤝 Colaboradores](#🤝-colaboradores)

<!--te-->

## 🎯 Objetivo do projeto

Este é um projeto de cunho educativo, no qual foi possível desenvolver uma aplicação de uma API de blog em que é possível fazer login, cadastrar, visualizar, pesquisar, editar e excluir dados referentes à usuários, categorias dos posts e as próprias postagens do Blog.

- foi desenvolvida uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts

- Foi desenvolvido endpoints que estarão conectados ao seu banco de dados seguindo os princípios do `REST`

- Para fazer um post é necessário usuário e login, portanto foi trabalhada a relação entre user e post

- Para a utilização de categorias para os posts, foi trabalhada a relação de posts para categorias e de categorias para posts

## 📝 O que pratiquei

Neste projeto, foi possível testar as habilidades:

- Utilizar o `Sequelize` para integrar o banco de dados com sua aplicação

- Criar migrações utilizando o `Sequelize`

- Criar seeds utilizando o `Sequelize`

- Utilizar o `Sequelize` para criar relacionamento 1:1 entre tabelas

- Utilizar o `Sequelize` para criar relacionamento 1:N entre tabelas

- Utilizar o conceito de transações para realizar operações atômicas no banco de dados com `Sequelize`

- Utilizar o `Sequelize` para criar relacionamento N:N entre tabelas

- Gerar tokens a partir de informações como login e senha;

- Autenticar pessoas usuárias utilizando o token JWT.

- Autorizar o acesso a rotas do Express, usando o token JWT.

## 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [ORM Sequelize](https://sequelize.org/)

As seguintes bibliotecas foram utilizadas para documentação do projeto:

- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)

## 🚀 Rodando o projeto na sua máquina

Para rodar o projeto na sua máquina é necessário alguns pre requisitos:

### 📍Pre Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)!

Comandos para clonar o projeto na sua máquina:

```bash
# Clone este repositório com o comando:
git clone git@github.com:raphaelprsilva/blogs-api.git

# Acesse a pasta do projeto no terminal/cmd com o comando:
cd blogs-api

# Instale as dependências com o comando:
npm install

# Inicie a aplicação com o comando:
npm run debug

```

O projeto possui um arquivo `docker-compose.yaml`, ou seja, você pode rodar o projeto com o Docker. Então caso você opte por:

### Rodar o projeto com o Docker

Seu docker-compose deve estar na versão 1.29 ou superior antes de começar.

A documentação para instalação do Docker Compose pode ser encontrada [aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-Docker-Compose-on-Ubuntu-20-04-en) ou [aqui](https://docs.docker.com/compose/install/).

Você pode alterar o local no primeiro artigo de "1.26.0" para "1.29.2".

Execute o comando `docker-compose up -d —build` para iniciar os serviços "node" e "db".

- Se você estiver executando o MySQL localmente na porta padrão (3306), lembre-se de pará-lo ou modificá-lo se desejar utilizar o aplicativo em contêineres

- Esses serviços inicializarão os contêineres `blogs_api` e `blogs_api_db`;

- A partir deste ponto, você pode rodar o contêiner "`blogs_api`" no VS Code ou executá-lo usando a CLI;

Use o comando `docker exec -it blogs api bash` para obter informações.

Ele concederá a você acesso ao terminal interativo executado em segundo plano do contêiner gerado pelo compose.

Instale as dependências [**Se houver**] usando `npm install`, de acordo com a fonte de informações. (Configurado dentro do contêiner)

- **Atenção:** Se você decidir utilizar o Docker, **TODOS** os comandos listados em "package.json" (npm start, npm test, npm run dev,...) devem ser executados **DENTRO** do container, ou seja, no terminal que se abre após rodar o comando "docker exec" mencionado anteriormente.

- **Atenção:** O **git** do container não está configurado com suas informações de login. Defina suas credenciais git dentro do contêiner ou confirme fora dele.

- **Atenção:** O comando `npm audit fix` não deve ser usado! Várias dependências do projeto são atualizadas, e essa alteração resulta em conflitos com o

- **Dica:** A extensão 'Remote - Containers' é sugerida para que você possa desenvolver sua aplicação no container Docker diretamente no VS Code, assim como você pode com as localizações dos seus arquivos. Ele pode ser encontrado na área de extensões recomendadas do VS Code.

![teste sequencial](./public/remote-container.png)

## 📚 Documentação da API

Para ver a documentação da API no Swagger com todas as funcionalidades da mesma, basta:

1. Colocar a aplicação para rodar com o comando:

```bash
npm run debug
```

2. No seu navegador, insira a rota:
   - http://localhost:3000/doc

Abaixo, temos uma imagem de como a documentação fica no navegador, mostrando todos os end-points.

![Imagem da Documentação](./public/image-documentacao.png)

## Estrutura do banco de dados e relação entre tabelas

Abaixo, temos uma imagem ilustrativa de como se dá a relação entre as tabelas no banco de dados:

![Tabelas no DB](./public/der.png)

## Rotas e End-Points

A documentação com o Swagger já é uma boa referência para a documentação da API, ou seja, dá para fazer testes interativos e ver o que cada end-point retorna.

Mas, caso você não queira, abaixo temos o que cada end-point faz e suas validações (caso existam):

### Rota `/login`

---

- O endpoint deve ser acessível através do URL `/login`;

  - Exemplo: `http://localhost:3000/login`

- O corpo da requisição deve o formato abaixo:

  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

- É validado que não é possível fazer login sem todos os campos preenchidos

- É validado que não é possível fazer login com um usuário que não existe

- Ao fazer login com sucesso, um token é gerado

---

### Rota `/user`

#### Criando um usuário

- O método utilizado para criar o usuário é o `POST`

- O endpoint está acessível através do URL `/user`

  - Exemplo: `http://localhost:3000/user`

- O endpoint adiciona um novo `user` a sua tabela no banco de dados

- O corpo da requisição deve ter o formato abaixo:
  ```json
  {
    "displayName": "Ramon Valdez",
    "email": "madruga@email.com",
    "password": "123456",
    "image": "https://f.i.uol.com.br/fotografia/2018/08/07/15336661995b69e39778b65_1533666199_3x2_md.jpg"
  }
  ```

#### Regras de negócio para a criação de usuário

- É validado que não é possível cadastrar com o campo `displayName` menor que 8 caracteres

  - Se a requisição não tiver o campo `displayName` devidamente preenchido com 8 caracteres ou mais, o resultado retornado terá:

    - Status HTTP: `400`

    - Resposta JSON:

  ```json
  {
    "message": "\"displayName\" length must be at least 8 characters long"
  }
  ```

- É validado que não é possível cadastrar com o campo `email` com formato inválido

  - Se a requisição não tiver o campo `email` devidamente preenchido com o formato `<prefixo@dominio>`, o resultado retornado terá:

    - Status HTTP: `400`

    - Resposta JSON:
      ```json
      {
        "message": "\"email\" must be a valid email"
      }
      ```

- É validado que não é possível cadastrar com o campo `password` menor que 6 caracteres

  - Se a requisição não tiver o campo `password` devidamente preenchido com 6 caracteres ou mais, o resultado retornado terá:

    - Status HTTP: `400`

    - Resposta JSON:
      ```json
      {
        "message": "\"password\" length must be at least 6 characters long"
      }
      ```

- É validado que não é possível cadastrar com um email já existente

  - Se a requisição enviar o campo `email` com um email que já existe, o resultado retornado deverá ser conforme exibido abaixo, com:

    - Status HTTP: `409`

    - Resposta JSON:
      ```json
      {
        "message": "User already registered"
      }
      ```

- É validado que é possível cadastrar um pessoa usuária com sucesso

  - Se o `user` for criado com sucesso o resultado retornado deverá ser:

    - Status HTTP: `201`

    - Resposta JSON (token no formato abaixo):
      ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
      }
      ```

---

#### Listando todos os usuários

- Para listar os usuários, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint está acessível através do URL `/user`;
- O endpoint traz todos `users` do banco de dados;

##### Regras de negócio para que todos os usuaŕios sejam listados

- É validado que é possível listar todos os usuários

  - Ao listar usuários com sucesso o resultado retornado deverá ter:

    - Status HTTP: `200`
    - Resposta JSON:

      ```json
      [
        {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        }

        /* ... */
      ]
      ```

---

#### Listando um usuário pelo seu `id`

- Para listar os usuários, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint é acessível através do URL `/user/:id`;
- O endpoint traz o `user` baseado no `id` do banco de dados se ele existir;

##### Regras de negócio para listar um usuário

- É validado que é possível listar um usuário específico com sucesso

  - Ao listar um usuário com sucesso o resultado retornado deverá ter:

    - Status HTTP: `200`
    - Resposta JSON:
      ```json
      {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      }
      ```

- É validado que não é possível listar um usuário inexistente

  - Se o usuário for inexistente o resultado retornado deverá ter:

  - Status HTTP: `404`
  - Resposta JSON:

    ```json
    {
      "message": "User does not exist"
    }
    ```

---

### Deletando um usuário

- Para deletar um usuário, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint está acessível através do URL `/user/me`;

- O endpoint deleta você do banco de dados, baseado no `id` que esta dentro do seu `token`;

- É utilizado o token de autenticação nos headers, para saber o user logado correspondente á ser apagado;

##### Regras de negócio necessárias para deletar o usuário atual

- É validado que o usuário atual está autenticado com um token válido

- É validado que é possível excluir meu usuário com sucesso

  - Se o user for deletado com sucesso não deve ser retornada nenhuma resposta, apenas ter:

    - Status HTTP: `204`

---

### Rota `/categories`

#### Criando uma nova categoria de Post para o blog

- Para criar uma categoria de post, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint está acessível através do URL `/categories`

- O endpoint adiciona uma nova categoria a sua tabela no banco de dados

- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

##### Regras de negócio para criar uma nova categoria de post para o blog

- É validado que o usuário está autenticado com um token

- É validado que não é possível cadastrar uma categoria sem o campo `name`

  - Se a requisição não tiver o campo `name` devidamente preenchidos(não pode haver campo em branco), o resultado retornado terá:

    - Status HTTP: `400`

    - Resposta JSON:
      ```json
      {
        "message": "\"name\" is required"
      }
      ```

- É validado que é possível cadastrar uma categoria com sucesso

  - Se a categoria for criada com sucesso o resultado retornado deverá ter:

    - Status HTTP: `201`

    - Resposta JSON:
      ```json
      {
        "id": 3,
        "name": "Typescript"
      }
      ```

---

#### Listar todas as categorias de posts do blog

- Para listar todas as categorias de post do blog, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint está acessível através do URL `/categories`;

- O endpoint traz todas categorias do banco de dados;

##### Regras de negócio para listar todas as categorias de posts do blog

- É que o usuário, para listar as categorias, deve estar autenticado com um token

- É validado que é possível listar todas as categoria com sucesso

  - Ao listar categorias com sucesso o resultado retornado deverá ter:

    - Status HTTP: `200`

    - Resposta JSON:

      ```json
      [
        {
          "id": 1,
          "name": "Inovação"
        },
        {
          "id": 2,
          "name": "Escola"
        }

        /* ... */
      ]
      ```

---

### Rota `/post`

#### Criando um novo `post` para o blog

- Para criar um novo post para o blog, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint é acessível através do URL `/post`;

- O endpoint adiciona um novo blog post e vincul as categorias em suas tabelas no banco de dados;

- O corpo da requisição deverá seguir o formato abaixo:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

##### Regras de negócio para a criação de um novo post para o blog

- É necessário que o usuário esteja autenticado, para poder criar um novo post para o blog

- É validado que não é possível cadastrar sem todos os campos preenchidos

  - Se a requisição não tiver todos os campos devidamente preenchidos(não pode haver campos em branco), o resultado terá:

    - Status HTTP: `400`

    - Resposta JSON:

      ```json
      {
        "message": "Some required fields are missing"
      }
      ```

- É validado que não é possível cadastrar um blogpost com uma `categoryIds` inexistente

  - Se a requisição não tiver o campo `categoryIds` devidamente preenchido com um array com pelo menos uma categoria que exista, o resultado retornado terá:

    - Status HTTP: `400`

    - Resposta JSON:

      ```json
      {
        "message": "\"categoryIds\" not found"
      }
      ```

- É validado que é possível cadastrar um blogpost com sucesso

  - Se o blog post for criado com sucesso o resultado retornado deverá ter:

  - Status HTTP: `201`

  - Resposta JSON:

    ```json
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "updated": "2022-05-18T18:00:01.196Z",
      "published": "2022-05-18T18:00:01.196Z"
    }
    ```

---

#### Listar todos os posts do blog

- Para listar todos os posts do blog, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint é acessível através do URL `/post`;

- O endpoint traz todos os bogs posts do user dono dele e as categorias do banco de dados;

##### Regras de negócio para listar os posts do blog

- É validado se o usuário está autenticado com um token

- É validado que é possível listar blogpost com sucesso

  - Ao listar posts com sucesso o resultado retornado ter:

    - Status HTTP: `200`

    - Resposta JSON:

      ```json
      [
        {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 1,
              "name": "Inovação"
            }
          ]
        }

        /* ... */
      ]
      ```

---

#### Listar um post específico usando o seu id

- Para listar um post do blog, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint é acessível através do URL `/post/:id`;

- O endpoint traz o blog post baseado no `id` do banco de dados se ele existir;

##### Regras de negócio para listar um post do blog

- É validado que o usuário está autenticado com um token

- É validado que é possível listar um blogpost com sucesso

  - Ao listar um post com sucesso o resultado retornado deverá ter:

    - Status HTTP: `200`

    - Resposta JSON:

      ```json
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      }
      ```

- É validado que não é possível listar um blogpost inexistente

  - Quando o post é inexistente o resultado retornado deverá ter:

    - Status HTTP: `404`

    - Resposta JSON:

      ```json
      {
        "message": "Post does not exist"
      }
      ```

---

#### Editando um blog post

- Para editar um post do blog, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint está acessível através do URL `/post/:id`;

- O endpoint edita um post do banco de dados, se ele existir;

- É permitida a alteração de um blog post caso a pessoa seja dona dele;

- Não é permitida a alteração das categorias do post, somente os atributos `title` e `content` podem ser alterados;

- O corpo da requisição segue o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```

##### Regras de negócio para edição de um blog post

- É validado que o usuário está logado para poder editar um post

- É validado que não é possível editar um blogpost com outro usuário

  - Somente o user que criou o blog post pode editá-lo. Sendo assim, em caso de sucesso, o resultado terá:

    - Status HTTP: `401`

    - Resposta JSON:

      ```json
      {
        "message": "Unauthorized user"
      }
      ```

- É validado que não é possível editar sem todos os campos preenchidos

  - Se a requisição não tiver todos os campos devidamente preenchidos(não pode haver campos em branco), o resultado terá:

    - Status HTTP: `400`

    - Resposta JSON:

      ```json
      {
        "message": "Some required fields are missing"
      }
      ```

- É validado que é possível editar um blogpost com sucesso

  - Se o blog post for alterado com sucesso o resultado retornado terá:

    - Status HTTP: `200`

    - Resposta JSON:

      ```json
      {
        "id": 3,
        "title": "Latest updates, August 1st",
        "content": "The whole text for the blog post goes here in this key",
        "userId": 1,
        "published": "2022-05-18T18:00:01.000Z",
        "updated": "2022-05-18T18:07:32.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          },
          {
            "id": 2,
            "name": "Escola"
          }
        ]
      }
      ```

---

#### Deletando um blog post

- Para deletar um post do blog, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint está acessível através do URL `/post/:id`;

- O endpoint remove um blog post baseado no `id` do banco de dados se ele existir;

- Bm blog post só é removido, caso a pessoa seja dona dele;

##### Regras de negócio para deletar um post

- É validado que o usuário que deseja deletar o post, esteja logado e autenticado

- É validado que não é possível deletar um blogpost com outro usuário

  - Somente o user que criou o blog post poderá deletá-lo, o resultado retornado deverá ter:

    - Status HTTP: `401`

    - Resposta JSON:

      ```json
      {
        "message": "Unauthorized user"
      }
      ```

- É validado que é possível deletar um blogpost com sucesso

  - Se o blog post for deletado com sucesso não deve ser retornada nenhuma resposta, apenas ter:

    - Status HTTP: `204`

- É validado que não é possível deletar um blogpost inexistente

  - Se o post for inexistente o resultado retornado deverá ter:

    - Status HTTP: `404`

    - Resposta JSON:

      ```json
      {
        "message": "Post does not exist"
      }
      ```

---

#### Pesquisar um blog post por algum termo do título ou conteúdo

- Para pesquisar um post do blog, será necessário ter um token para autenticação, sendo assim você deverá:

  - Ter feito o login

  ou

  - Ter acabado de criar um novo usuário

- O endpoint está acessível através do URL `/post/search`;

- O endpoint traz os blogs post baseados no `q` do banco de dados, se ele existir;

- É retornado um array de blogs post que contenham em seu título ou conteúdo o termo passado na URL;

- É retornado um array vázio caso nenhum blog post satisfaz a busca

- O query params da requisição segue o formato abaixo:

  ```js
    http://localhost:PORT/post/search?q=vamos
  ```

##### Regras de negócio para a pesquisa

- É validado que o usuário atual está autenticado com um token

- É validado que é possível buscar um blogpost pelo `title`

  - Se a buscar for pelo `title` o resultado retornado deverá ter:

    - HTTP Status: `200`

    - Resposta JSON:

      ```json
      // GET /post/search?q=Vamos que vamos

      [
        {
          "id": 2,
          "title": "Vamos que vamos",
          "content": "Foguete não tem ré",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 2,
              "name": "Escola"
            }
          ]
        }
      ]
      ```

- É validado que é possível buscar um blogpost pelo `content`

  - Se a buscar for pelo `content` o resultado retornado deverá ter:

    - Status HTTP: `200`

    - Resposta JSON:

      ```json
      // GET /post/search?q=Foguete não tem ré

      [
        {
          "id": 2,
          "title": "Vamos que vamos",
          "content": "Foguete não tem ré",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 2,
              "name": "Escola"
            }
          ]
        }
      ]
      ```

- É validado que é possível buscar todos os blogpost quando passa a busca vazia

  - Se a buscar for vazia o resultado retornado deverá ser ter:

    - Status HTTP: `200`

    - Resposta JSON:

      ```json
      // GET /post/search?q=

      [
        {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 1,
              "name": "Inovação"
            }
          ]
        }

        /* ... */
      ]
      ```

- É validado que é possível buscar um blogpost inexistente e retornar array vazio

  - Se a buscar um post inexistente o resultado retornado deverá ter:

    - HTTP Status: `200`

    - Resposta JSON:

      ```json
      // GET /post/search?q=BATATA

      []
      ```

## 👉🏾 Status do projeto

O projeto se encontra finalizado!

## 🔗 Link para acessar o projeto

Se quiser ao invés de clonar o projeto e rodar localmente, você deseje ver o mesmo online, basta clicar no link abaixo:

<a href="" target="_blank" rel="noopener">Blogs API</a>

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/raphaelprsilva">
        <img src="https://avatars.githubusercontent.com/u/50886915?s=400&u=fa3df0caab0c83b9f88678abd93e8d5a81a5cd6f&v=4" width="100px;" alt="Foto de Raphael Silva no GitHub"/><br>
        <sub>
          <b>raphaelprsilva</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
