const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)

const userSchema = mongoose.Schema({ //method that accepts an object
    name: String,
    username: String,
    email: String
})

//creating model(for crud)
mongoose.model("user", userSchema);


