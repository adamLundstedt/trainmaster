import dbConnect from "../../lib/dbConnect";
import TempData from "../../models/TempData";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const tempData = await TempData.findById(id);
        if (!tempData) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: tempData });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const tempData = await TempData.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!tempData) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: tempData });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedTempData = await TempData.deleteOne({ _id: id });
        if (!deletedTempData) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
