const request = require("supertest");
const app = require("../app");

describe("GET /api/hello", () => {
  it("should return Hello, world!", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, world!" });
  });
});

describe("GET /api/greet", () => {
  it('should return a personalized greeting when "name" is provided', async () => {
    const res = await request(app).get("/api/greet?name=Arsalan");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, Arsalan!" });
  });

  it('should return a 400 error when "name" is missing', async () => {
    const res = await request(app).get("/api/greet");
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "Name query parameter is required" });
  });
});
