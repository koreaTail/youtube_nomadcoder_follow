import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", handelHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;