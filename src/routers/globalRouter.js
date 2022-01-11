import express from "express";

const globalRouter = express.Router();

const handelHome = (req, res) => res.send("HOME");

globalRouter.get("/", handelHome);

export default globalRouter;