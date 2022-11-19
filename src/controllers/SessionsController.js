const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;

        const user = await knex("users").where({ email }).first();//first() é para sempre captar o primeiro dado pareado, pois temos uma validação para nao existir o mesmo e-mail e consequentemente duas validações

        if(!user) {
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }//verificação se usuário existe
        
        const passwordMatched = await compare(password, user.password);//aproveitamos que ja temos a confirmação dos dados do usuário acima e utilizamos aqui para confirmar a senha

        if(!passwordMatched) {
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({ user, token });
    }
}

module.exports = SessionsController;