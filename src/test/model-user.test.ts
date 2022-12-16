import knexfile from "../../knexfile";
import { testServer } from "./jest.setup";

describe("test Model user", () => {
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

  it("must create a user and insert in the database", async () => {
    const response = await testServer.post("/create").send({
      name: "JEST",
      email: "JEST@JEST.com",
      password: "123456",
    });

    expect(response.status).toBe(201);
    // pegando a msg do response
    expect(response.body.message).toBe("User created successfully");
  });

  it("must return a user by id", async () => {
    const response = await testServer.get("/1");
    expect(response.status).toBe(200);

    console.log("Get By - ID", response.body);

    // pegando o nome do response
    expect(response.body[0].name).toBe("John Doe");
  });

  it("must edit a user by id", async () => {
    const response = await testServer.put("/edit/1").send({
      name: "JEST",
      email: "JestpatchTEst@gmail.com",
    });
    expect(response.status).toBe(200);

    console.log("Edit By - ID", response.body);

    // pegando a msg do response
    expect(response.body.message).toBe("User updated successfully");
  });

  it("must delete a user by id", async () => {
    const response = await testServer.delete("/delete/2");
    expect(response.status).toBe(200);

    console.log("Delete By - ID", response.body);

    // pegando a msg do response
    expect(response.body.message).toBe("User deleted successfully");
  });

  afterAll(async () => {
    const knex = require("knex")(knexfile.testJest);

    // Run migrations
    await knex.migrate.rollback();

    // Destroy connection
    await knex.destroy();
  });
});
