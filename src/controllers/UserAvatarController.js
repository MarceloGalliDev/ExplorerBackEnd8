const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
    async update(request, response) {
        const user_id = request.user.id;
        const avatarFilename = request.file.filename;

        const diskStorage = new DiskStorage();

        const user = await knex("users").where({ id: user_id }).first();//estamos buscando dentro da tabela users, o id correspondente

        if(!user) {
            throw new AppError("Somente usuários autenticados podem mudar o avatar!", 401);
        }//verificando se está autenticado

        if(user.avatar) {
            await diskStorage.deleteFile(user.avatar);//aqui estamos atualizando o estado da coluna avatar da tabela user
        }

        const filename = await diskStorage.saveFile(avatarFilename);
        user.avatar = filename;

        await knex("users").update(user).where({ id: user_id });//aqui estamos atualizando a tabela user, somente onde o id se coincide, caso não tenha o where ele atualizará toda a table

        return response.json(user);
    }

}

module.exports = UserAvatarController;