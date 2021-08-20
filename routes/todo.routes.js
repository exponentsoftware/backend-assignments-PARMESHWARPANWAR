import express from "express";

const router = express.Router();
const app = express();
app.use(express.json());

import {
  createtodo,
  Alltodo,
  todo,
  updatetodo,
  deletetodo,
  byTitle,
} from "../controllers/todo.controllers.js";

router.post("/add", createtodo);
router.get("/alltodos", Alltodo);
router.get("/todo/:userId", todo);
router.post("todo/title", byTitle);
router.patch("/update", updatetodo);
router.delete("/delete", deletetodo);

export default router;
