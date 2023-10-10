import express from "express"; // ESModules
import * as diaryServices from "../services/diaryService";

const router = express.Router();

router.route("/").get((_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.route("/:id").get((req, res) => {
  const diary = diaryServices.findById(+req.params.id);
  res.send(diary?.id + "  🦕  Este es el id del usuario");
  res.send(diaryServices.getEntriesWithoutSensitiveInfo);
});

router.route("/diary/:id").get((_req, res) => {
  res.send("Saving all entdiaries");
});

router.route("/diary/:id/comment").get((__req, res) => {
  res.send("Save my proyect");
});

export default router; // ESModules

// ECMAScript (ES6) => import {  } from - export const otraFuntion

// CommonJS => const { } = require() - module.exports = miFuntion
