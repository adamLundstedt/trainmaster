import dbConnect from "../../../lib/dbConnect";
import Booking from "../../models/Booking";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const booking = await Booking.findById(id);
        if (!booking) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: booking });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const booking = await Booking.create(req.body);

        res.status(201).json({ success: true, data: booking });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const booking = await Booking.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!booking) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: booking });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedbooking = await Booking.deleteOne({ _id: id });
        if (!deletedbooking) {
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
