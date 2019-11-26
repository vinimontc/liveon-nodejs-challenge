# Desafio LiveOnSolutions Node JS

## Criação de uma API de Pokemons com autenticação e rotas protegidas.

Foi feito uma API seguindo o padrão RESTful com suporte a criação, edição, exclusão e leitura de cadastros de Pokémons realizando também o controle de usuários na aplicação.
A autenticação do usuário é realizada com [JWT](https://jwt.io/) e a mesma é necessária para cadastrar um Pokémon e também para posteriormente editá-lo ou excluí-lo.

### Para rodar a aplicação

- Para rodar aplicação é necessário configurar os bancos de dados através de um arquivo .env (há um <.env.example> na raiz do projeto).Após a configuração do banco relacional e do MongoDB(NoSQL) a aplicação deve funcionar como esperado.
- O mapeamento dos Endpoints está identificado como <Insomnia_node_challenge.json> também presente na raiz do projeto. 

### Rotas criadas

##### Usuários

- Endpoint de login
- Endpoint de cadastro
- Endpoint de edição de perfil

##### Pokémons

- Endpoint para listagem de todos os Pokémons cadastrados
- Endpoint para criação
- Endpoint para edição
- Endpoint para exclusão
- Endpoint para detalhamento (visualização de um Pokémon)

### Foi utilizado em geral: 

- ExpressJS
- Postgres
- MongoDB
- Sequelize
- Yup
- Mongoose
- Apidoc.js
- Nodemon
- Yarn
- Docker
- EsLint
- Prettier
- JWT

##### Feito por: Vinícius Monteiro Carvalho (https://linkedin.com/in/vinimontc/)
