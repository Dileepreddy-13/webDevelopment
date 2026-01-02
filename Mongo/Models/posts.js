const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB');
};

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String
    }
);

const postSchema = new mongoose.Schema(
    {
        content: String,
        likes: Number,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
);

const User = mongoose.model("User", userSchema);

const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     try {
//         const user1 = new User({
//             username: "jane_doe",
//             email: "jane@example.com"
//         });
//         const savedUser = await user1.save();

//         const post1 = new Post({
//             content: "Hello World!",
//             likes: 10,
//         });

//         post1.user = savedUser;

//         let savedPost = await post1.save();
//         console.log(savedPost);
//     } catch (err) {
//         console.log(err);
//     }
// };

// addData();

// const addData = async () => {
//     try{
//         let user=await User.findOne({username:"jane_doe"});
//         const post1 = new Post({
//             content: "My second post",
//             likes: 5,
//         });
//         post1.user=user;
//         let savedPost = await post1.save();
//         console.log(savedPost);
//     }
//     catch(err){
//         console.log(err);
//     }   
// };

// addData();