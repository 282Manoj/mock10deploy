const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb+srv://rf:123@cluster0.6pzozbu.mongodb.net/mock?retryWrites=true&w=majority");
module.exports={
    connection
}