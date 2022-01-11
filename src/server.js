import express from "express";

const PORT = 4000;
const app = express();


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

