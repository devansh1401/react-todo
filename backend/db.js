/*
* todo {
    title : string
    description : string
    completed : boolean
}
*/

const mongoose = require("mongoose");
//usually done in .env file
mongoose.connect("mongodb+srv://devansh1:939Ff2PkIy0RbLES@cluster0.ed7pqyo.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {todo}
