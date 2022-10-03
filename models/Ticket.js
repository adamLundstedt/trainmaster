import mongoose from "mongoose";

const Ticket = new mongoose.Schema({
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
  date: {
    type: Date,
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
export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
