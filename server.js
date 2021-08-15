import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;
//Middleware
app.use(express.json());
app.use(cors());

import MONGODB_URI from "./config.js";
import todosRoutes from "./routes/todo.routes.js";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});



app.use("/", todosRoutes);

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT}`);
});