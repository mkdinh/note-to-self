const supertest = require("supertest");
const app = require("../../server");
const sessionFactory = require("../factories/sessionFactory");
const userFactory = require("../factories/userFactory");

class Request {
  static async connect() {
    // create custom request containing server
    const server = app.listen(process.env.PORT);
    const test = supertest(app);
    const agent = supertest.agent(app);
    const request = new Request(app, server, test, agent);
    // instanate

    // return proxy for managing different methods
    return new Proxy(request, {
      get: function(target, property) {
        // console.log(target[property], property);
        return target[property] || test[property];
      },
    });
  }

  constructor(app, server, test, agent) {
    this.server = server;
    this.app = app;
    this.test = test;
    this.testAgent = agent;
  }

  disconnect() {
    return new Promise(resolve => {
      this.server.close(() => {
        resolve();
      });
    });
  }

  async execRequests(actions) {
    return actions.map(action => {
      return this.curryRequest(action);
    });
  }

  async login() {
    const user = await userFactory();
    // this._user = user;
    return this.test.post("/api/auth/login").send({
      username: user.username,
      password: user._password,
    });
  }

  async fakeLogin() {
    // create user model to grab unique id
    const user = await userFactory();
    const { session, sig } = sessionFactory(user);

    this.test.setCookie([`session=${session}`, `session.sig=${sig}`]);

    // return this;
  }
}

module.exports = Request;
