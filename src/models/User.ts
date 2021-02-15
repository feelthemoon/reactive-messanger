import { Schema, model, Document } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  confirmed: boolean;
  avatar: string;
  confirm_hash: string;
  last_seen: Date;
}
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Invalid data"],
    },
    avatar: { type: String },
    username: { type: String, unique: true, required: true },
    password: {
      type: String,
      required: true,
    },
    confirmed: { type: Boolean, default: false },
    confirm_hash: { type: String },
    last_seen: { type: Date },
  },
  {
    timestamps: true,
  }
);
const UserModel = model<IUser>("User", UserSchema);
export default UserModel;
