import { App } from "./app/server";
const configs = require("./infra/configs");

const port: number = process.env.port || configs.get('/port') || 1337;
const app = new App().app;
app.listen(port, () =>{
  console.log('Aplication berjalan di PORT : ' +  port);
})

