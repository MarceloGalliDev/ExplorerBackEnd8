const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);//esse comando utiliza a função ensureAuthenticated em todas as rotas

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);//:id aqui é o id da nota
notesRoutes.delete("/:id", notesController.delete);//:id aqui é o id da nota
notesRoutes.get("/", notesController.index);//como estamos passando como um query, não é necessario usar um parametro na url


module.exports = notesRoutes;