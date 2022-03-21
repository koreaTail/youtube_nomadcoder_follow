import Video from "../models/Video";


// Video.find({}, (error,videos)=>{
//     console.log("error", error);x
//     console.log("videos", videos);
// })

export const home = async (req, res) => {
        const videos = await Video.find({});  
        console.log(videos)
        return res.render("home", {pageTitle: "Home", videos})
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

export const postUpload = async (req, res) => {
    const { title, description, hashtags  } = req.body;
    try{
        await Video.create({
            title: title,
            description: description,
            createdAt: Date.now(),
            hashtags: hashtags.split(",").map((word)=>`#${word}`),
            meta: {
                views: 0,
                rating: 0,
            },
        });
        // await video.save();
        // const dbVideo = await video.save();
        // console.log(dbVideo)
        return res.redirect("/");
    } catch(error){
        console.log(error);
        return res.render("upload", {
            pageTitle: "Upload Video", 
            errorMessage: error._message,
        });
    }
};