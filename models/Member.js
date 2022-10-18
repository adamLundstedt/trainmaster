import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const MemberSchema = new mongoose.Schema({
  userID: {
    type: ObjectId,
    ref: "User",
  },
  password: {
    type: String,
    required: [true, "Var god välj ett lösenord!"],
    maxlength: [30, "Lösenordet kan inte vara längre än 30 tecken långt!"],
    minLength: [6, "Lösenordet måste vara minst 6 tecken långt"],
  },
});
export default mongoose.models.Member || mongoose.model("Member", MemberSchema);
