import express from "express"; // ESModules

const router = express.Router();

router.route("/").get((_req, res) => {
  res.send("Fetching all ENTRY entdiaries");
});

router.route("/:id").get((_req, res) => {
  res.send("Saving all entdiaries");
});

export default router; // ESModules

// ECMAScript (ES6) => import {  } from - export const otraFuntion

// CommonJS => const { } = require() - module.exports = miFuntion
