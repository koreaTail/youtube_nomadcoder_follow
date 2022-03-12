import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src" + "/views");
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter)
app.use("/videos", videoRouter);

const routerLogger = (req, res, next) => {
    // console.log("PATH", req.path);
    next();
};

const methodLogger = (req, res, next) => {
    // console.log("METHOD", req.method);
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

