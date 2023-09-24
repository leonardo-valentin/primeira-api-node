const { Router } = require("express");

const userRoutes = Router();

const UsersController = require("../controllers/UsersController");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersController = new UsersController();

userRoutes.post("/", usersController.create);

userRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = userRoutes;
