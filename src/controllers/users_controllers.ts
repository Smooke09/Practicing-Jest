import User from "../model/users";
import { Request, Response } from "express";

class UsersControllers {
  // Testando rotas com o Jest e Supertest

  async getUsers(request: Request, response: Response) {
    const allUsers = await User.query().withGraphFetched("addresses");
    return response.json(allUsers);
  }

  async getUserById(request: Request, response: Response) {
    const { id } = request.params;

    const user = await User.query()
      .withGraphFetched("addresses")
      .where("id", id);

    return response.json(user);
  }

  async createUser(request: Request, response: Response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return response.status(400).json({ message: "Missing data" });
    }

    const user = await User.query().insert({
      name,
      email,
      password,
    });

    return response.status(201).json({
      message: "User created successfully",
      user,
    });
  }

  async editUser(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email } = request.body;

    if (!name || !email) {
      return response.status(400).json({ message: "Missing data" });
    }

    const user = await User.query().patchAndFetchById(id, {
      name,
      email,
    });

    return response.status(200).json({
      message: "User updated successfully",
      user,
    });
  }

  async deleteUser(request: Request, response: Response) {
    const { id } = request.params;

    const user = await User.query().deleteById(id);

    return response.status(200).json({
      message: "User deleted successfully",
      user,
    });
  }
}

export default new UsersControllers();
