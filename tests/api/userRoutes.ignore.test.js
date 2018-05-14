// const Request = require("../helpers/Request");
// let request;

// describe("User Routes", () => {
//   beforeEach(async () => {
//     request = await Request.connect();
//   });

//   afterEach(async () => {
//     await request.disconnect();
//   });

//   describe("When user logged in", () => {
//     let user;
//     let cookies;
//     beforeEach(async () => {
//       const res = await request.fakeLogin();
//       cookies = res.headers["set-cookie"];
//       console.log(request._session);

//       user = request._user;
//     });

//     test("GET /users/:id, expect to get back user info", async () => {
//       console.log(request._session);
//       res = await request.testAgent.jar
//         .setCookie([request._session, request._sig])
//         .get(`/api/users/${user._id}`);
//       expect(res.status).toEqual(302);
//       expect(res.body.username).toEqual(user.username);
//       expect(res.body.password).toEqual(user.password);
//     });
//     //   test("POST /users/", async () => {});
//   });
//   // describe("when user not logged in", () => {
//   //   test("GET /users/:id, expect to return 401 error", async () => {});
//   //   test("POST /users/, expect to return 401 error", async () => {});
//   // });
// });
