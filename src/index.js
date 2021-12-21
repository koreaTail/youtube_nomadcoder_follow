import express from "express";

const app = express();

const handleListening = () => console.log("Server listening on port 8000 🛰")

app.listen(8000, handleListening)