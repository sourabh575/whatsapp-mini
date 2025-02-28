const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

 main().
 then(()=>{console.log("connection successfully");
 })
 .catch(err => console.log(err));
 
 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
 }

let allchats =[
    {
    from:"neha",
    to:"priya",
    message:"send me your exam sheets",
    created_at:new Date(),
 },
 {
    from:"amit",
    to:"sumit",
    message:"all the best",
    created_at:new Date(),
 },
 {
    from:"Ram",
    to:"Shayam",
    message:"How are you",
    created_at:new Date(),
 },
 {
    from:"raghav",
    to:"shiv",
    message:"what's going",
    created_at:new Date(),
 },
 {
    from:"aman",
    to:"ramesh",
    message:"bring me some fruits",
    created_at:new Date(),
 },
];

Chat.insertMany(allchats);
