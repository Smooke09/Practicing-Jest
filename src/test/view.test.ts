import { testServer } from "./jest.setup";

describe("View", () => {
  it("should return data from the view", async () => {
    const response = await testServer.get("/");
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe("object");
  });
});
