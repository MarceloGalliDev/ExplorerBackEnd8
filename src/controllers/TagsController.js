const knex = require("../database/knex");

class TagsController {
    async index(request, response) {
        const user_id = request.user.id;//ele chega como objeto desestruturado

        const tags = await knex("tags")
        .where({ user_id }) //como o user_id tem o mesmo nome da variavel de request.params eu nao preciso passar user_id: user_is
        .groupBy("name") //estamos agrupando por nome as tags e remove nomes duplicados
        
        return response.json(tags)
    }
}

module.exports = TagsController;