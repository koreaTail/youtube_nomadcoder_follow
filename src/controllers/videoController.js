let videos = [
    {
        title: "첫번째 영상",
        rating: 5,
        comments: 266,
        createdAt: "122 minutes ago",
        views: 1576,
        id: 1,
    },
    {
        title: "두번째 영상",
        rating: 2,
        comments: 86,
        createdAt: "42 minutes ago",
        views: 56,
        id: 2,
    },
    {
        title: "세번째 영상",
        rating: 3,
        comments: 42,
        createdAt: "22 minutes ago",
        views: 5633,
        id: 3,
    },
    {
        title: "넷번째 영상",
        rating: 5,
        comments: 22,
        createdAt: "12 minutes ago",
        views: 542,
        id: 4,
    },
    {
        title: "다섯번째 영상",
        rating: 1,
        comments: 1,
        createdAt: "2 minutes ago",
        views: 1,
        id: 5,
    },
];

export const trending = (req, res) => res.render("home", {pageTitle: "Home", videos: videos});
export const see = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render("watch", {pageTitle: `Watching: ${video.title}`, video: video});
};
export const getEdit = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1]
    // console.log(req.params)
    res.render("edit", {pageTitle: `Editing: ${video.title}`, video: video});
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

