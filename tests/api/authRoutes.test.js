const Request = require("../helpers/Request");
const userFactory = require("../factories/userFactory");
let request;

//--------------------------------------------------------
describe("Authentication", () => {
  beforeEach(async () => {
    request = await Request.connect();
  });

  afterEach(async () => {
    // await request.disconnect();
  });

  //--------------------------------------------------------
  describe("GET /auth/login", () => {
    test("When log in with correct credentials", async () => {
      const res = await request.login();

      expect(res.status).toEqual(302);
      expect(res.headers["content-type"]).toMatch("application/json");
    });
  });

  //--------------------------------------------------------
  describe("When login with incorrect credentials", () => {
    test("When log in with incorrect username", async () => {
      const user = await userFactory();
      let res = await request
        .post("/api/auth/login")
        .send({ username: "craaaazy", password: user._password });

      expect(res.status).toBe(401);
    });

    test("When log in with incorrect password", async () => {
      const user = await userFactory();
      let res = await request
        .post("/api/auth/login")
        .send({ username: user.username, password: "craaaazy" });

      expect(res.status).toBe(401);
    });

    test("When log in with empty crendentials", async () => {
      const user = await userFactory();
      let res = await request
        .post("/api/auth/login")
        .send({ username: user.username, password: "craaaazy" });

      expect(res.status).toBe(401);
    });
  });

  //--------------------------------------------------------
  describe("When logging out", () => {
    test(" redirect user to logout page and clear cookie", async () => {
      await request.login();
      const res = await request.get("/api/auth/logout");
      expect(res.status).toBe(302);
      expect(res.redirect).toEqual(true);
      expect(res.header.location).toEqual("/");
    });
  });
});
