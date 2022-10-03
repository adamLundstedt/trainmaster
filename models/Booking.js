import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
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
export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
