import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    status: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

var TodoModel = mongoose.model("TodoModel", TodoSchema);
export default TodoModel;
