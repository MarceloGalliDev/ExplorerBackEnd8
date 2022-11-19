1.PASSO
    - Rodar as migrations do sqlite
        - Estamos rodando de forma automática com função migrationsRun()
        - cria-se o banco de dados

    - Rodar as migrations do knew
        - Temos um script para isso dentro de package.json, npm run migrate
        - cria-se as tabelas de notes, tags e links

2.PASSO
    - Criamos um usuario no Insomnia com POST de forma JSON, para o request.body
    - Testamos as verificações
    - Testamos o update no Imsomnia com PUT de forma JSON, para o request.params, pois estamos utilizando o id como parametro
    - Observar o formato do JSON de acordo com o ordenado no código

3.PASSO
    - Criamos as notas, usando o Insomnia com POST de forma JSON, para o request.params
    - Observar se o ID na URL existe no banco, pois o sql vai controlar a existecia, se caso nao existir vai retornar um erro
    - Index no notes, estamos usando request.query, passando como query na URL o comando