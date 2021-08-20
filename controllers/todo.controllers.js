import TodoModel from "../model/todo.model.js";
import User from "../model/user.model.js";

export const createtodo = async (req, res) => {
  try {
    const newtodo = new TodoModel(req.body);
    newtodo.save();
    res.send(newtodo);
  } catch (err) {
    res.send({ message: err.message });
  }
};

export const Alltodo = async (req, res) => {
  console.log("YESSS s");
  TodoModel.find()
    .select("username title  taskcompleted work hobby task")
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((er) => {
      res.status(500).json({
        message: er.message,
      });
    });
};

export const todo = async (req, res) => {
  try {
    const data = await TodoModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatetodo = async (req, res) => {
  const { name, status, todotitle, category } = req.body;
  const userExist = await TodoModel.findOne({ name: name });
  if (userExist) {
    const key = userExist._id;
    const updateuser = new TodoModel({ status, category });
    TodoModel.findByIdAndUpdate(key, {
      status: req.body.status,
      todotitle: req.body.todotitle,
      category: req.body.category,
    }).then(() => {
      res.status(200).json({ message: "Todo updated.." });
    });
  }
};

export const byCategory = (req, res) => {
  try {
    // sorting data using createdAT field in descending order
    const data = await TodoModel.find().sort({ createdAt: "-1" });
    // console.log(data);
    const filters = req.query;
    const filteredCategory = data.filter((category) => {
      let isValid = true;
      for (key in filters) {
        console.log(key, category[key], filters[key]);
        isValid = isValid && category[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredCategory);
  } catch (err) {
    res.json.status(500).json({ message: err.message });
    console.log(err);
  }
};

export const byTitle = (req, res) => {
  TodoModel.find({ title: req.body.title })
    .select("name title status category")
    .exec()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};

export const deletetodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Todo with id: ${id}`);

  await TodoModel.findByIdAndRemove(id);

  res.json({ message: "Todo deleted successfully." });
};
