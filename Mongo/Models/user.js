const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB');
};


const userSchema = new mongoose.Schema(
    {
        username:String,
        address:[
            {
                _id: false,
                location:String,
                city:String
            }
        ]
    }
);

const User = mongoose.model("User",userSchema);

const createUser = async ()=>{
    try{
        const user = new User({
            username:"john_doe",
            address:[
                {location:"123 Main St", city:"New York"},
                {location:"456 Maple Ave", city:"Los Angeles"}
            ]
        });
        const result = await user.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

createUser();