import dbConnect from "../../../lib/dbConnect";
import Locomotive from "../../models/Locomotive";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const locomotive = await Locomotive.findById(id);
        if (!locomotive) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: locomotive });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(404).json({ success: false });
      break;
  }
}
