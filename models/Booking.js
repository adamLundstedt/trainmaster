import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
  },
  tickets: {
    type: Array,
  },
});
export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
