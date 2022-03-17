import express from "express";
import { see, getEdit, postEdit, getUpload, postUpload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);
// videoRouter.route("/upload").get(getUpload).post(postUpload);

videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;