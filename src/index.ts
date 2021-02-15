import mongoose from "mongoose";
import express from "express";
import config from "config";
import bodyParser from "body-parser";

import {
  UserController,
  DialogController,
  MessageController,
} from "./controllers";

const app = express();
const PORT = config.get("port") || 5000;

const User = new UserController();
const Dialog = new DialogController();
const Message = new MessageController();

app.use(bodyParser.json());

app.get("/user/:id", User.show);
app.post("/user/register", User.create);
app.delete("/user/:id", User.delete);

app.get("/dialogs/:id", Dialog.index);
app.post("/dialogs", Dialog.create);
app.delete("/dialogs/:id", Dialog.delete);

app.get("/messages", Message.index);
app.post("/messages", Message.create);

function start() {
  mongoose
    .connect(config.get("dbUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      app.listen(PORT, () => {
        console.log("Server started");
      });
    })
    .catch((err) => {
      console.log("Server error: " + err);
      process.exit(1);
    });
}

start();
