# palpites_copa

Uma api para criar e gerenciar palpites para a copa.

# Sobre

É uma api que permite a criação, edição, excçusão e consulta de palpites criados para a copa. A API ainda está em construção e haverá novas funcionalidades em breve.

# Instalação

Para usar a aplicação, inicialmente use: npm i

# Orientações gerais das rotas

   ## rotas de Autenticação
POST /signup => Realiza o cadastro de um usuário
POST /signin => Realiza o login de um usuário e inicia a sessão

   ## rotas de palpites
POST /palpites/:gameId/:resultId => Cadastrar um palpite
POST /palpites/resultado => Cadastrar o do resultado esperado do jogo
GET /palpites/:gameId => lista os todos os palpites do jogo
DELETE /palpites/:guessId => Deleta o palpite e o resultado esperado do jogo
PUT /palpites/:guessId => Atualiza os valores do palpite
# Autor

Laycon John, https://github.com/LayconJohn

# Versão

1.0

# Construído com

Typescript
Node
Express
Postgres

# Arquitetura
A aplicação está dividida nas seguintes maneira:
Routers
Controllers
Repositories
Schemas
Protocols
Middlewares

# Futuras implementações
GET /palpites/ranking
Paginação dos palpites
POST /logout
GET /palpites/:idGuess
GET /palpites/perfil/:userId
POST /jogos
PUT /games:id



