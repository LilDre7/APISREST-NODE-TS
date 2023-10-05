"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const colors_1 = require("colors");
const PORT = process.env.PORT || 8080;
app_1.default.get("/", (_req, res) => {
    console.log("Someone pinged here 🦕 ");
    res.send("ping pong");
});
app_1.default.listen(PORT, () => {
    console.log(colors_1.bgRed.black(` 🧪 App running on port ${PORT} 🧪 `));
});
