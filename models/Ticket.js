import mongoose from "mongoose";

const ticket = new mongoose.Schema({
  ticketId: {
    type: ObjectId,
  },
  trainId: {
    type: ObjectId,
  },
  coach: {
    type: ObjectId,
  },
  startStation: {
    type: String,
  },
  endStation: {
    type: String,
  },
  bookingId: {
    type: ObjectId,
  },
  price: {
    type: Number,
  },
  seatNumber: {
    type: Number,
  },
  route: {
    type: ObjectId,
  },
});
export default mongoose.models.ticket || mongoose.model("ticket", ticketSchema);
