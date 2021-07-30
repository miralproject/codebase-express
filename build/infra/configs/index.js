"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var confidence_1 = __importDefault(require("confidence"));
dotenv_1.default.config();
var config = {
    port: process.env.PORT
};
var store = new confidence_1.default.Store(config);
exports.get = (function (key) { return store.get(key); });
