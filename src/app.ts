import express from "express";
import diariesRoute from "./route/diariesRoute";

const app = express();

app.use(express.json());

app.use("/api/diaries", diariesRoute);

export default app;
