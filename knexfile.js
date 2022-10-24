const path = require("path");

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
      //conn = connection, cb = callback, habilitando a funcionalidade de deletar em CASCADE
    },
    useNullAsDefault: true,
    //permitir conteudo nulo
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations"),
    }
  },
};

//arquivo de configurações do KNEX para acesso ao SQL
