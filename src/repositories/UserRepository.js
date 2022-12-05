const sqliteConnection = require("../database/sqlite");

class UserRepository {
    async findByEmail(email) {
        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        return user;
    };

    async create({ name, email, password}) {
        const database = await sqliteConnection();
        const userId = await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password])

        return {id: userId};//quando criamos um user, temos auto-increment, que gera um id, entao criamos um objeto com params id recebendo este valor
    };


}

module.exports = UserRepository;