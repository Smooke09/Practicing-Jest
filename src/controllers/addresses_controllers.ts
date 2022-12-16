import { Request, Response } from "express";
import Addressses from "../model/addresses";

class AddressesControllers {
  async index(request: Request, response: Response) {
    const addresses = await Addressses.query();

    console.log(addresses);
    return response.json(addresses);
  }
}

export default new AddressesControllers();
