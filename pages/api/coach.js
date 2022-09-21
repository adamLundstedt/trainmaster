import dbConnect from "../../../lib/dbConnect";
import Coach from "../../models/Coach";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const coach = await Coach.findById(id);
        if (!coach) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: coach });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(404).json({ success: false });
      break;
  }
}
