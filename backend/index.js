const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());


app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(400).json({
      msg: "Invalid payload",
    });
    return;
  }
  //put in mongoDB
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created successfully",
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(400).json({
      msg: "Invalid payload",
    });
    return;
  }
  //update in mongoDB
  await todo.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
      title : req.body.title,
      description : req.body.description
    }
    /*
    In Mongoose, the findByIdAndUpdate method is designed to take two separate arguments: 
    the first for the query criteria to find the document(s) and the second for the update operation. 
    This design choice allows for a clear separation between the selection of documents and the update operation, 
    which can be beneficial for readability and maintainability of the code.
   */
  );
  res.json({
      msg : "Todo updated successfully"
  })
});

app.listen(3000, () => console.log("Server started"));
