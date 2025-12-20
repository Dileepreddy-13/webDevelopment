const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main().then(() => {
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [{
    from: "Nihal",
    to: "Padeep",
    msg: "MG",
    created_at: new Date()
}, {
    from: "Pradeep",
    to: "Mithul",
    msg: "Hi ra",
    created_at: new Date()
}, {
    from: "Mithul",
    to: "Kiran",
    msg: "Thagudham",
    created_at: new Date()
}, {
    from: "Kiran",
    to: "Hemanth",
    msg: "Hi ra nani",
    created_at: new Date()
}];

Chat.insertMany(allChats).then((res)=>console.log(res)).catch((err)=>console.log(err));