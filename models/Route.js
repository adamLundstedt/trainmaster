import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({

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

export default mongoose.models.Route ||
  mongoose.model("Route", RouteSchema);
