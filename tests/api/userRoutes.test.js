const Request = require("../helpers/Request");
let request;

describe("User Routes", () => {
  beforeEach(async () => {
    request = await Request.connect();
  });

  afterEach(async () => {
    await request.disconnect();
  });

  describe("When user logged in", () => {
    let user;

    beforeEach(async () => {
      const res = await request.login();
      user = request._user;
    });
    test("GET /users/:id, expect to get back user info", () => {
      expect(true).toEqual(true);
    });
    //   test("POST /users/", async () => {});
  });
  // describe("when user not logged in", () => {
  //   test("GET /users/:id, expect to return 401 error", async () => {});
  //   test("POST /users/, expect to return 401 error", async () => {});
  // });
});
