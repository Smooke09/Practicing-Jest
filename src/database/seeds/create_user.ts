import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { name: "John Doe", email: "johndoe@gmail.com", password: "123456" },
    { name: "Doe", email: "doee@gmail.com", password: "123456" },
    { name: "Maria", email: "maria@gmail.com", password: "123456" },
  ]);
}
