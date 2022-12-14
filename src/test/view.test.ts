import knexfile from "../../knexfile";
import { testServer } from "./jest.setup";

describe("View", () => {
  beforeAll(async () => {
    const knex = require("knex")(knexfile.testJest);

    // Run migrations
    await knex.migrate.latest();

    // Run seeds
    await knex.seed.run();

    // Destroy connection
    await knex.destroy();
  });

  it("must return all users that were populated in the database", async () => {
    const response = await testServer.get("/");
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe("object");
  });

  it("must create a user and insert in the database", async () => {});

  afterAll(async () => {
    const knex = require("knex")(knexfile.testJest);

    // Run migrations
    await knex.migrate.rollback();

    // Destroy connection
    await knex.destroy();
  });
});
