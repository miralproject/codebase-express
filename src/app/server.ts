import express, { Application, Request, Response} from "express";

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.rootes();
  }

  protected rootes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('Ini adalah root mengunakan typescript');
    })
  }
}
