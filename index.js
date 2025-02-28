const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create Model
const User = mongoose.model("User", userSchema);

// Creating new user instances
const user1 = new User({
  name: "Adam",
  email: "adam@yahoo.com",
  age: 24,
});

// user1
//   .save()
//   .then((res) => console.log("User1 saved:", res))
//   .catch((err) => console.log(err));

// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 48,
// });

// user2
//   .save()
//   .then((res) => console.log("User2 saved:", res))
//   .catch((err) => console.log(err));

// // Insert multiple users
// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
// ])
//   .then((res) => console.log("Users inserted:", res))
//   .catch((err) => console.log(err));

// // Find users older than 47
// User.find({ age: { $gt: 47 } })
//   .then((res) => console.log("Users with age > 47:", res))
//   .catch((err) => console.log(err));

// // Find one user older than 47
// User.findOne({ age: { $gt: 47 } })
//   .then((res) => console.log("One user with age > 47:", res))
//   .catch((err) => console.log(err));

// // Find user by ID
// User.findById("67b81be0fdd3e97c458bcae0")
//   .then((res) => console.log("User found by ID:", res))
//   .catch((err) => console.log(err));

// // Update one user's age
// User.updateOne({ name: "Bruce" }, { age: 80 })
//   .then((res) => console.log("Update one:", res))
//   .catch((err) => console.log(err));

// // Update many users' age
// User.updateMany({ age: { $gt: 48 } }, { age: 80 })
//   .then((res) => console.log("Update many:", res))
//   .catch((err) => console.log(err));

//find and update
User.findOneAndUpdate({ name: "Adam" }, { age: 2 },{new:true})
  .then((res) => console.log("find and updated one:", res))
  .catch((err) => console.log(err));

//delte one
User.deleteOne({ name: "Adam" })
  .then((res) => console.log("Deleted user:", res))
  .catch((err) => console.log(err));

  //findby id and delete
  User.findByIdAndDelete("67b81e3fcecc1ee6439850d7")
  .then((res) => console.log("Deleted user by use id:", res))
  .catch((err) => console.log(err));


// Corrected findOneAndDelete
User.findOneAndDelete({ name: "Bruce" })
  .then((res) => console.log("Deleted user:", res))
  .catch((err) => console.log(err));


