# Back-end Ecoleta

Aplicação back-end do ecoleta desenvolvido na New Level Week

## Rotas

Rota: Endereço completo da requisição
Recurso: O que vamos acessar do sistema

## Métodos HTTP

GET: Buscar uma ou mais informações
POST: Criar uma nova informação no backend
PUT: Atualizar uma informação existente no backend
DELETE: Remover uma informação no backend

### Exemplos

POST http://localhost:3333/users -> Criar um usuário
GET http://localhost:3333/users -> Listar usuários
GET http://localhost:3333/users/1 -> Listar um único usuário com código 1

### Parametros

Request Param: Parâmetros que vem na rota para identificar um recurso
Query Param: Parâmetro que vem na rota, não obrigatório, para consultas, paginação, filtros
Request Body: Parâmetros que vem no corpo da requisação, para criação e atualização de informações

## Tabelas

Mapeamento do banco de dados em SQLite

### point

Pontos de coleta.

- imagem
- nome
- email
- whatsapp
- latitude
- longitude
- city
- state

### items

Items para coleta.

- image
- title

### point_items

Items que o ponto coleta

- point_id
- item_id

## Funcionalidades

Listagem das funcionalidades do sistema

### WEB

- Cadastro de ponto de coleta
- Lita os itens de coleta

### MOBILE

- Listar pontos (Filtro estado/cidade/item)
- Mostrar detalhes dos pontos
