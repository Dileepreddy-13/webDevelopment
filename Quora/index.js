const express = require("express");
const app = express();
const port = 8080;
const path =require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username : "dileep",
        content : "I love coding"
    },
    {
        username : "nihal",
        content : "I know backend"
    },
    {
        username : "pradeep",
        content : "I am intrested in frontend"
    }
]

app.get("/",(req,res)=>{
    res.send("QUORA");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.listen(port,()=>{
    console.log("listening");
});
