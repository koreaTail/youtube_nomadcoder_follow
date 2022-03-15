import movieModel from "../models/Video";


// movieModel.find({}, (error,videos)=>{
//     console.log("error", error);
//     console.log("videos", videos);
// })

export const trending = async (req, res) => {
    const videos = await movieModel.find({});  
    res.render("home", {pageTitle: "Home", videos: []})
};
export const see = (req, res) => {
    const id = req.params.id;
    res.render("watch", {pageTitle: `Watching`});
};
export const getEdit = (req, res) => {
    const id = req.params.id;
    // console.log(req.params)
    res.render("edit", {pageTitle: `Editing`});
};
export const postEdit = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
}
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => {
    res.send("delete video");
};


export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
}

export const postUpload = (req, res) => {
    return res.redirect("/");
}