const request = require("supertest");
const app = require("../../app");

describe("GET Request that fetches all of calculation ", () => {
  it("matches if recieved contains expected element", (done) => {
    request(app).get("/");
    expect(200);
    done();
  });

  it("get the result of calculation", async () => {
    const res = await request(app).post("/addMath").send({ x: 1, y: 2 });
    expect(res.status).toBe(200);
  });
});
