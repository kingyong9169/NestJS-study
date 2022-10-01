import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleWare() {
    //* loggin middleware
    this.app.use((req, res, next) => {
      // next 추가해주면 미들웨어가 된다.
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      // next 추가해주면 미들웨어가 된다.
      console.log(req.rawHeaders[1]);
      res.send({ error: "404 not found" });
    });
  }

  public listen() {
    this.setMiddleWare();
    this.app.listen(8000, () => {
      console.log(`Example app listening on port http://localhost:8000`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
