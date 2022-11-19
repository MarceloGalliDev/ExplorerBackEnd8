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
    
    - cardinalidade
        - pé de galinha = um usuário pode ter multiplas ligações


Insomnia
    - Dentro do insomnia, quando eu passo um json como POST, eu estou passando uma informação dentro do body da requisição
    - Dentro do insomnia, quando eu passo um dado dentro da url, estou passando uma informação dentro do params da requisição

FUNÇÃO MAP
    - Usado para percorrer cada elemento dentro de um array
    - Devolve outro array
    - Para cada elemento dentro do array, o map retorna um novo objeto
     
    - Exemplos:
        const tags = [
            {id: 1, name: "node", note_id: 1},
            {id: 2, name: "express", note_id: 1},
            {id: 3, name: "sqlite", note_id: 1},
            {id: 4, name: "react", note_id: 2},
            {id: 5, name: "javascript", note_id: 3},
            {id: 6, name: "next", note_id: 4},
        ];
----------------------------------------------------------------
        const newArray = tags.map(qualquerNomeParaVariavel => {
            return {
                name: tag.name
            }
        })
    - Dentro do objeto eu retorno somente o name de cada elemento contido
----------------------------------------------------------------
        const newArray = tags.map(tag => tag)
    - Aqui estou retornando todo conteudo contido em cada elemento dentro do array
----------------------------------------------------------------
        const newArray = tags.map(tag => tag.name)
    - Aqui estou retornando um array simples somente com os nomes que esta contido dentro do array (["node", "express"...])
----------------------------------------------------------------
        const newArray = tags.map(tag => {
            return {
                ...tag,
                date: new Date()
            }
        }
    - Aqui estamos adicionando mais um conteudo dentro de cada objeto contido no array
    - Percorremos cada item e acrescentando a data atual
----------------------------------------------------------------

FUNÇÃO FILTER
    - Usado para filtrar objetos de dentro de um array
    - Retorna um novo array, so que filtrado

    - Exemplos:
        const tags = [
            {id: 1, name: "node", note_id: 1},
            {id: 2, name: "express", note_id: 1},
            {id: 3, name: "sqlite", note_id: 1},
            {id: 4, name: "react", note_id: 2},
            {id: 5, name: "javascript", note_id: 3},
            {id: 6, name: "next", note_id: 4},
        ];
----------------------------------------------------------------
        const newArray = tags.filter(tag => tag.note_id = 1);
    - Aqui estamos retornando um novo array com objetos que tenha o conteúdo do note_id === 1

----------------------------------------------------------------
FUNÇÃO resolve(__dirname, "..", "tmp");
    - Usado para resolver o caminho do path da past, usamos __dirname para diretório e "..", para subir um nível na pasta, "tmp" é o nome da pasta que eu busco