const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const path = require("path");
const Chat = require("./models/chat.js");
const methodoverride = require("method-override");

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");
 app.use(express.static(path.join(__dirname, "public")));
 app.use(express.urlencoded({ extended: true }));
 app.use(methodoverride("_method"));
 
 main().
 then(()=>{console.log("connection successfully");
 })
 .catch(err => console.log(err));
 
 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
 }

//Edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);

  if (!chat) {
      return res.status(404).send("Chat not found");
  }

  res.render("edit.ejs", { chat }); 
});


//Delete route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedchat = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

//Update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let {message: newMsg } = req.body;
  console.log(newMsg);
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: newMsg },
    {runValidators:true, new: true}
  );
  console.log(updatedChat);
  res.redirect("/chats");
});   


 //new route
  app.get("/chats/new", (req, res) => {
      res.render("new.ejs");
  });

  //create route
  app.post("/chats", async (req, res) => {
    let {from,to,message}=req.body;
    let newchat = new Chat({
      from : from,
      to : to,
      message: message,
      created_at:new Date()
    }); 
    newchat
    .save()
    .then(res=>{console.log("chat saved")})
    .catch(err=>{console.log(err)}); 
    res.redirect("/chats");  
    });


//index route
 app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
   // console.log(chats);
    res.render("index.ejs",{chats});

 });
 
 app.get("/", (req, res) => {
     res.send("root is working");
 });
 
 app.listen(8080, () => {
     console.log("server is listening on port 8080");
 });