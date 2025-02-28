const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    
    },
    author: {
        type: String,
        default:"Not known",
    },
    price:{
        type: Number,
        min:[1,"Price should be greater than 1"],
    },  
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
    genre:[String],

});

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
 
//     price:1200,
// });

// book1
//   .save()
//   .then((res) => console.log("book1 saved:", res))
//   .catch((err) => console.log(err));
// let book1 = new Book({
//     title: "How to kill a Mockingbird",
//     author:"harper lee",
//     price:"299",
// });

// book1
//   .save()
//   .then((res) => console.log("book1 saved:", res))
//   .catch((err) => console.log(err));

// ;
// let book1 = new Book({
//     title: "Gone ",
//     price:-1,
    

// });

// book1
//   .save()
//   .then((res) => console.log("book1 saved:", res))
//   .catch((err) => console.log(err));

let book1 = new Book({
    title: "Marvvel comics v2",
    price:600,
    genre:["comics","superhero","fiction"],
});

book1
  .save()
  .then((res) => console.log("book1 saved:", res))
  .catch((err) => console.log(err));

  Book.findByIdAndUpdate("67b9de01b59570908a7db1a4",{price:-500},{runValidators:true})
  .then((res) => console.log("book1 updated:", res))
  .catch((err) => console.log(err.errors.price.properties.message));
