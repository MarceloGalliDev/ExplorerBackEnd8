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