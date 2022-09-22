import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: ObjectId,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  tickets: {
    type: Array,
  },
});
export default mongoose.models.booking ||
  mongoose.model("booking", bookingSchema);
