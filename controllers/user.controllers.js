import User from "../model/user.model";

export const newUser = async (req, res) => {
  try {
    const newuser = new User(req.body);
    newuser.save();
    res.send(newuser);
  } catch (err) {
    res.send({ message: err.message });
  }
};

export const Allusers = async (req, res) => {
  User.find()
    .populate("postedBy", "_id name")
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};

export const user = async (req, res) => {
  User.findById(req.params.id)
    .then((doc) => {
      if (!doc) {
        return res.status(404).json("USer not available");
      }
      return res.status(200).json(doc);
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
};