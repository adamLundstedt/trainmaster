import dbConnect from "../../../lib/dbConnect";
import Route from "../../models/Route";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const route = await Route.findById(id);
        if (!route) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: route });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
