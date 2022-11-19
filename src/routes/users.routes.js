const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = usersRoutes;

//quando estamos criando a conta, não possuímos token de autenticação, mas na hora de fazer um update na conta será necessário.
//usersRoutes.put("/:id", ensureAuthenticated, usersController.update);, aqui nos colocamos a autenticação antes de chamar a função de update, para obter a válidação do token 