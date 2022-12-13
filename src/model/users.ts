import { Model } from "objection";
import knex from "../database/connection";

Model.knex(knex);

export default class User extends Model {
  static get tableName() {
    return "users";
  }

  //   static get relationMappings() {
  //     return {
  //       pets: {
  //         relation: Model.HasManyRelation,
  //         modelClass: __dirname + "/Pets",
  //         join: {
  //           from: "users.id",
  //           to: "pets.user_id",
  //         },
  //       },
  //     };
  //   }
}
