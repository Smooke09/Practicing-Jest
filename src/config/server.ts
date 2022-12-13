import express from "express";
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

server.get("/", async (request, response) => {
  const allUsers = await User.query().select("*");

  return response.json(allUsers);
});

export default server;
