import express from "express";
import UsersControllers from "../controllers/users_controllers";

const usersRouter = express();

usersRouter.get("/", UsersControllers.getUsers);
usersRouter.get("/:id", UsersControllers.getUserById);
usersRouter.post("/create", UsersControllers.createUser);
usersRouter.put("/edit/:id", UsersControllers.editUser);
usersRouter.delete("/delete/:id", UsersControllers.deleteUser);

export default usersRouter;
