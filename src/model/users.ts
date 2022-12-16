import { Model } from "objection";
import knex from "../database/connection";
import Addressses from "./addresses";

Model.knex(knex);

export default class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: Addressses,
        join: {
          from: "users.id",
          to: "addresses.user_id",
        },
      },
    };
  }
}
