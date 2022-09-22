import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  userID: {
    type: ObjectId,
  },
  userPassword: {
    type: String,
    required: [true, "Please provide a password for this member!"],
    maxlength: [30, "Password cannot be more than 20 characters!"],
  },
});
export default mongoose.models.member || mongoose.model("member", memberSchema);
