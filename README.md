# ExplorerBackEnd8
 Curso explorer Rocketseat

SQL - Comandos DDL
    - CREATE
    - DROP
    - ALTER

SQL - Comandos DML
    - C - create = INSERT
    - R - Read = SELECT
    - U - Update = UPDATE
    - D - Delete = DELETE

Exemplos:
    - incluir registro
    INSERT INTO users
    (name, email, password)
    VALUES
    ('Marcelo', 'marcelo@hotmail.com', '123')

    SELECT * FROM users
    SELECT id, name, email FROM users

    - atualizar dados
    UPDATE users SET
    avatar = 'marcelo.png',
    name = 'marcelo galli'
    WHERE id = 1

    - deletar um registro
    DELETE FROM users
    WHERE id = 2    

MIGRATIONS
    - automatização na criação de tabelas no banco de dados

SQL in JavaScript
    - abaixo exemplo de inclusão de comando SQL no JS, focando na questão de inclusão de variável, usando (?), [email], se tivessemos mais (?), colocariamos na ordem dentro do array
    - const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    - inserindo criptografia nas senhas dentro do SQL DB
        npm install bcryptjs

NODEMON
    - Limpar porta
        - sudo lsof -i :3000
        - Capturar o PID
        - kill -9 {PID}

SQL Query Builder
    - É um construtor de sintax de SQL
    - Permite construção de instruções SQL independete do banco de dados utilizado
    - usamos o KNEX.JS
        - npm install knex --save
        - criar o arquivo knex
            - npx knex init
    
    - MIGRATIONS
        - É uma forma de versionamento da base de dados
            - métodos do migration
                - UP = responsável por criar ou alterar algo no banco de dados
                - DOWN = responsável pelo ROLLBACK, desfazer alterações realizadas pelo migration
            - criando migration
                - npx knex migrate:make createNotes
            - rodando migration
                - npx knex migrate:latest

    - chave primary ou chave primaria
        - identificador unico dentro da tabela
    - chave foreing ou chave estrangeira 
        - chave gerada dentro de outra tabela