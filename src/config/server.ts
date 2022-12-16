import express from "express";
import { Request, Response } from "express";
import User from "../model/users";
import dotenv from "dotenv";

const server = express();

dotenv.config({
  path: process.env.NODE_ENV === "develop" ? ".env.test" : ".env",
});

// console.log("node_env", process.env.NODE_ENV);
// console.log("ARQUIVE", process.env.ARQUIVE);

const petBreeds = [
  {
    id: 1,
    name: "Poodle",
    features: "Orgulhoso, ativo e inteligente",
  },
  {
    id: 2,
    name: "Labrador",
    features: "Amigável, carinhoso e inteligente",
  },
  {
    id: 3,
    name: "Bulldog",
    features: "Carinhoso, leal e brincalhão",
  },
  {
    id: 4,
    name: "Pastor Alemão",
    features: "Leal, inteligente e protetor",
  },
  {
    id: 5,
    name: "Beagle",
    features: "Amigável, carinhoso e inteligente",
  },
];

server.use(express.json());

server.get("/", async (request: Request, response: Response) => {
  const allUsers = await User.query().select("*");

  return response.json(allUsers);
});

server.get("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  const user = await User.query().select("*").where("id", id);

  return response.json(user);
});

server.post("/create", async (request: Request, response: Response) => {
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
});

server.put("/edit/:id", async (request: Request, response: Response) => {
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
});

server.delete("/delete/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  const user = await User.query().deleteById(id);

  return response.status(200).json({
    message: "User deleted successfully",
    user,
  });
});

export default server;
