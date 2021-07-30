"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./app/server");
var configs = require("./infra/configs");
var port = process.env.port || configs.get('/port') || 1337;
var app = new server_1.App().app;
app.listen(port, function () {
    console.log('Aplication berjalan di PORT : ' + port);
});
