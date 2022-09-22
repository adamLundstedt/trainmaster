import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({

  routeId: {
    type: ObjectId,
  },
  routeName: {
    type: String,
  },
  stations: {
    type: [Object],
  },
  
});

export default mongoose.models.route ||
  mongoose.model("route", routeSchema);
