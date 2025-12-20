const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_app',
    password: 'Dileep$2006'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};


// let data=[];
// for(let i=1;i<=100;i++)
// {
//     data.push(getRandomUser());
// }
// console.log(data);

// let q="INSERT INTO user (id,username,email,password) VALUES ?";


//     connection.query(q,[data], (err,result) => {
//         if(err){return res.send("error")};
//         console.log(result);
//     });
// connection.end();

app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    connection.query(q, (err, result) => {
        if (err) { return res.send("Error Occured"); };
        let count = result[0]["count(*)"];
        res.render("home.ejs", { count });
    });

});

app.get("/user", (req, res) => {
    let q = "SELECT id,username,email FROM user";

    connection.query(q, (err, result) => {
        if (err) { return res.send("Error Occured"); };
        let data = result;
        res.render("users.ejs", { data });
    });

});

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q, (err, result) => {
        if (err) { return res.send("Error Occured"); };
        let user = result[0];
        res.render("edit.ejs", { user });
    });

});

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formpass, username: formname } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q, (err, result) => {
        if (err) { return res.send("Error Occured"); };
        let user = result[0];
        if (formpass != user.password) {
            res.send("Wrong password");
        } else {
            let q2 = `UPDATE user SET username='${formname}' WHERE id='${id}'`;

            connection.query(q2, (err, result) => {
                if (err) { return res.send("Error Occured"); };
                res.redirect("/user");
            });

        }
    });

});

app.listen(8080, () => {
    console.log("app is started");
});
