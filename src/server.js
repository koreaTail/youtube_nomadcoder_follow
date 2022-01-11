import express, { Router } from "express";

const PORT = 4000;
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

const routerLogger = (req, res, next) => {
    console.log("PATH", req.path);
    next();
};

const methodLogger = (req, res, next) => {
    console.log("METHOD", req.method);
    next();
};

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("I still love you.");
};


app.use(methodLogger, routerLogger);
app.get("/",logger, handleHome);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);

