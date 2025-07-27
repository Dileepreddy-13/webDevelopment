const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    if(data)
    res.render("insta.ejs", { data });
    else
    res.send("NO PAGE FOUND");
});
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log("App is listening");
});
