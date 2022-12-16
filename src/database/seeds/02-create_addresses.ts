import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("addresses").del();

  // Inserts seed entries
  await knex("addresses").insert([
    {
      street: "Santa Maria de Jesus",
      number: "110",
      city: "Praia Grande",
      state: "SP",
      zip_code: "11718370",
      complement: "Bloco 3A APT 23",
      user_id: 1,
    },
    {
      street: "Rua manoel luiz lopes",
      number: "575",
      city: "Mongagua",
      state: "SP",
      zip_code: "1173000",
      complement: "",
      user_id: 2,
    },
  ]);
}
