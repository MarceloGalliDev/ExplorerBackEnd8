const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("JWT Token uninformed!", 401);
    }

    const [, token] = authHeader.split(" "); //Bearer (token)

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        request.user = {
            id: Number(user_id),
        };

        return next();
    } catch {
        throw new AppError("JWT Token invalid!", 401);
    }
}

module.exports = ensureAuthenticated;

//middlewares sempre recebe um next, para chamar a proxima função destino da requisição
//const authHeader = request.header.authorization; o token vai estar aqui dentro do cabeçalho da requisição
/*exemplo do array authHeader[], "Bare xxxxx", usamos o split para cortar no espaço entre a palavra e o token, o importante para nós é somente o token
["Bare", "xxxxxxx"
const [, token] = authHeader.split(" ");, aqui colocamos ja o token como variável dentro do array
*/
//const { sub: user_id } = verify(token, authConfig.jwt.secret);, aqui estamos desestruturando a o verify, e convertendo a variável de rotorno (verify retorna um sub se for válidado o token, esse sub contém os dados do token, ja verificado), criamos um alias.
/*
    request.user = {
            id: Number(user_id),
        }
nesse caso estamos convertendo o id em número, pois la no session nós convertemos o id em um String, para fazermos o armazenamento
*/