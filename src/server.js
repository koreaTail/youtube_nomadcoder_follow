import express, { Router } from "express";

const app = express();

const globalRouter = express.Router();

const handelHome = (req, res) => res.send("HOME");

globalRouter.get("/", handelHome)

const userRouter = express.Router();

const handelEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit/", handelEditUser)

const videoRouter = express.Router();

const handelWatchVideo = (req, res) => res.send("Watch Video");

VideoRouter.get("/watch/", handelWatchVideo)


app.use("/", globalRouter);
app.use("/users", userRouter)
app.use("/videos", videoRouter);

const handleListening = () => console.log("Server listening on port 8000 🛰")

app.listen(8000, handleListening)

