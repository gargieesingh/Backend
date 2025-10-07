const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)

const userSchema = mongoose.Schema({ //method that accepts an object
    name: String,
    username: String,
    email: String
})

//creating model(for crud)
mongoose.model("user", userSchema);

//we can also apply crud operations here, but we want to do that in some route, e.g. /delete for deleting , /register for creating etc.

module.exports = mongoose.model("user", userSchema);