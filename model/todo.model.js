import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: [
      true,
      "This username is already in use. Please try another username",
    ],
    lowercase: true,
  },
  title: {
    type: String,
  },
  taskcompleted: { type: Boolean, required: true, default: false },
  work: { type: String },
  hobby: { type: String },
  task: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date },
});

var TodoModel = mongoose.model("TodoModel", TodoSchema);
export default TodoModel;
