import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({

  routeId: {
    type: mongoose.Schema.ObjectId,
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
