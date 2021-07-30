import dotenv from "dotenv";
import Confidence from "confidence";

dotenv.config();

const config = {
  port: process.env.PORT
};

const store = new Confidence.Store(config);
exports.get = ((key: any) => store.get(key));