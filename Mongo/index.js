const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User = mongoose.model("User",userSchema);

const user1=new User({
    name:"abc",
    email:"abc@gmail.com",
    age:13
});

user1.save();

User.insertMany([{name:"abc", email:"abc@gmail.com", age:13},{name:"xyz", email:"xyz@gmail.com",age:14},{name:"ihj",email:"ijk@gmail.com",age:15}]);
// findone
// findById
User.find({}).then((res)=>console.log(res));

// User.updateOne({condition},{updation});
//updateMany
//findOneAndUpdate
// `` ById``

//User.deleteOne({condition})
//``Many
//findOneAndDelete
// `` ById``