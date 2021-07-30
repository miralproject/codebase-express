"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.rootes();
    }
    App.prototype.rootes = function () {
        this.app.route('/').get(function (req, res) {
            res.send('Ini adalah root mengunakan typescript');
        });
    };
    return App;
}());
exports.App = App;
