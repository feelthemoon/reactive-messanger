import express from "express";
import { DialogModel } from "../models";

class DialogController {
  index(req: express.Request, res: express.Response) {
    const authorId: any = req.params.id;
    DialogModel.find({ author: authorId })
      .populate(["author", "partner"])
      .then((dialogs) => {
        res.json(dialogs);
      })
      .catch(() => {
        res.status(404).json("Not found");
      });
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      author: req.body.author,
      partner: req.body.partner,
    };
    const dialog = new DialogModel(postData);
    dialog
      ?.save()
      .then((obj: any) => {
        return res.status(201).json(obj);
      })
      .catch(() => {
        return res.status(400).json("Invalid data");
      });
  }

  delete(req: express.Request, res: express.Response) {
    const id = req.params.id;
    DialogModel.deleteOne({ _id: id })
      .then(() => {
        res.json("Data removed");
      })
      .catch(() => res.status(404).json("Not found"));
  }
}

export default DialogController;
