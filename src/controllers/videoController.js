let videos = [
    {
        title: "첫번째 영상",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 56,
        id: 1,
    },
    {
        title: "두번째 영상",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 56,
        id: 2,
    },
    {
        title: "세번째 영상",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 56,
        id: 3,
    },
    {
        title: "넷번째 영상",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 56,
        id: 4,
    },
    {
        title: "다섯번째 영상",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 56,
        id: 5,
    },
];

export const trending = (req, res) => res.render("home", {pageTitle: "Home", videos: videos});
export const see = (req, res) => {
    // console.log(res.send(`watch Video #${req.params.id}`));
    const id = req.params.id;
    const video = videos[id-1];
    res.render("watch", {pageTitle: `Watching ${video.title}`, video: video});
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("delete video");
};

