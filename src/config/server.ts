import express from "express";
import { Request, Response } from "express";
import User from "../model/users";
import dotenv from "dotenv";
import AddressesControllers from "../controllers/addresses_controllers";
import addressesRouter from "../routes/addresses_router";
import usersRouter from "../routes/users_router";

const server = express();

dotenv.config({
  path: process.env.NODE_ENV === "develop" ? ".env.test" : ".env",
});

// console.log("node_env", process.env.NODE_ENV);
// console.log("ARQUIVE", process.env.ARQUIVE);

server.use(express.json());

server.use("/addresses", addressesRouter);
server.use("/users", usersRouter);

export default server;
