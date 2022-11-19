>> SQLITE
    - npm install sqlite
    - para criação de banco de dados

>> SQLITE3
    - npm install sqlite3
    - para criação de banco de dados

>> EXPRESS
    - npm install express
    - para criar um servidor node

>> EXPRESS ASYNC ERROR
    - npm install express-async-errors
    - para introduzir um framework de captura de erros e códigos de erros

>> KNEX
    - npm install knex
    - para gerenciamento de versão do banco de dados
    - para criação de migrations

>> BCRYPTJS
    - npm install bcryptjs
    - para criação de hash em password para melhorar a segurança

>> JSONWEBTOKEN
    - npm install jsonwebtoken
    - usado para gerenciamento de token de autenticação de usuário

>> MULTER
    - npm install multer
    - usado para uploads de arquivos


{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "jsonwebtoken": "^8.5.1",
    "knex": "^2.3.0",
    "sqlite": "^4.1.2",
    "sqlite3": "^5.1.2"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.14",
    "nodemon": "^2.0.20"
  },
  "scripts": {
    "start": "node ./src/server.js",
    "dev": "nodemon ./src/server.js",
    "migrate": "knex migrate:latest"
  }
}