import TodoModel from "../model/todo.model.js";

export const createtodo = async (req, res) => {
  const todo = new TodoModel({
    _id = new mongoose.Types.ObjectId(),
    username: req.body.username,
    title: req.body.title, 
    taskcompleted: req.body.taskcompleted,
    work: req.body.work,
    hobby: req.body.hobby,
    task: req.body.task,
  });
  todo
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Created todo data",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const Alltodo = async(req,res) => {
    console.log("YESSS s")
    TodoModel.find()
    .select(
      "username title  taskcompleted work hobby task"
    )
    .exec()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((er) => {
      res.status(500).json({
        message: er.message,
      });
    });
}

export const todo = async(req, res) => {
    console.log("YESS")
    console.log(req.params)
    TodoModel.findOne({_id:req.params.userId})
    .select(
        "username title  taskcompleted work hobby task"
      )
      .exec()
      .then((data) => {
          res.status(200).json(data);
      })
      .catch((er) => {
        res.status(500).json({
          message: er.message,
        });
      });

}

export const updatetodo = async(req, res) => {
    const userId = req.params.userId;
    UserModel.updateOne({ userId }, req.body)
                .then(async (doc) => {
                    if (!doc) { return res.status(404).end(); }
                    return res.status(200).send("Updated successfully");
                }).catch((err) => {
                    res.send({ message: err.message })
                })
}


export const deletetodo = async(req, res) => {
    Toto.findOneAndRemove({_id:req.params.id},(err) =>{
        if (err) {
            return req.send({message:err.message});
          }
          return res.status(200).send("Deleted successfully");
    })
}