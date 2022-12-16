import express from "express";
import AddressesControllers from "../controllers/addresses_controllers";

const addressesRouter = express();

addressesRouter.get("/", AddressesControllers.index);

export default addressesRouter;
