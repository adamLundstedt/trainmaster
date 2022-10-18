import mongoose from "mongoose";

const TempData = new mongoose.Schema({
  DepartureStation: {
    type: String,
    required: [true, "Please provide where you want to travel from."],
  },

  DestinationStation: {
    type: String,
    required: [true, "Please provide where you want to travel to."],
  },
});
export default mongoose.models.TempData || mongoose.model("TempData", TempData);