import express from "express";
import { MessageModel } from "../models";

class MessageController {
  index(req: express.Request, res: express.Response) {
    const dialogId: any = req.query.dialog;
    MessageModel.find({ dialog: dialogId })
      .populate(["dialog"])
      .then((messages) => {
        res.json(messages);
      })
      .catch(() => {
        res.status(404).json("Not found");
      });
  }

  // show(req: express.Request, res: express.Response) {
  //   const id: string = req.params.id;
  //   DialogModel.findById(id)
  //     .then((user) => {
  //       res.json(user);
  //     })
  //     .catch(() => {
  //       res.status(404).json({ message: "Not found" });
  //     });
  // }

  create(req: express.Request, res: express.Response) {
    const postData = {
      text: req.body.text,
      dialog: req.body.dialogId,
    };
    const message = new MessageModel(postData);
    message
      ?.save()
      .then((obj: any) => {
        return res.status(201).json(obj);
      })
      .catch(() => {
        return res.status(400).json("Invalid data");
      });
  }

  // delete(req: express.Request, res: express.Response) {
  //   const id = req.params.id;
  //   DialogModel.deleteOne({ _id: id })
  //     .then(() => {
  //       res.json("Data removed");
  //     })
  //     .catch(() => res.status(404).json("Not found"));
  // }
}

export default MessageController;
