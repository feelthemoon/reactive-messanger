import express from "express";
import { UserModel } from "../models";

class UserController {
  show(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findById(id)
      .then((user) => {
        res.json(user);
      })
      .catch(() => {
        res.status(404).json({ message: "Not found" });
      });
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    };
    const user = new UserModel(postData);
    user
      ?.save()
      .then((obj: any) => {
        return res.status(201).json(obj);
      })
      .catch(() => {
        return res.status(400).json("Invalid data");
      });
  }

  getMe() {
    //TODO: return info about myself
  }

  delete(req: express.Request, res: express.Response) {
    const id = req.params.id;
    UserModel.deleteOne({ _id: id })
      .then(() => {
        res.json("Data removed");
      })
      .catch(() => res.status(404).json("Not found"));
  }
}

export default UserController;
