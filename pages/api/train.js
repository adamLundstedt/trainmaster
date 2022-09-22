import dbConnect from "../../../lib/dbConnect";
import Train from "../../models/Train";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const train = await Train.findById(id);
        if (!train) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: train });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
