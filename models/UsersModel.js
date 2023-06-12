import mongoose from "mongoose";
const { Schema } = mongoose;
import validator from "./validator.js";

const UsersSchema = new Schema(
  {
    name: { type: String },

    email: {
      type: String,
      require: [true, "email is required "],
      unique: true,
    },
    password: { type: String, require: [true, "password is required "] },
    contact: { type: String },
    Role_id: { type: Schema.Types.ObjectId, ref: "UserRole" },
    Parentid: { type: String },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", UsersSchema);

export default Users;
