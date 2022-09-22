import mongoose from "mongoose";

const timeTableSchema = new mongoose.Schema({
  routeName: {
    type: String,
  },
  routeId: {
    type: ObjectId,
  },
  routeTimeInMinutes: {
    type: Number,
  },
  departureTimeFromOrigin: {
    type: String,
  },
  arrivalTimeAtDestination: {
    type: String,
  },
});
export default mongoose.models.timeTable ||
  mongoose.model("timeTable", timeTableSchema);
