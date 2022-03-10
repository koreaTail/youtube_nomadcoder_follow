export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
    return res.send(`watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
    console.log(req.params);
    res.send("watch edit");
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("delete video");
};

