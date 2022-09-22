import dbConnect from "../../../lib/dbConnect";
import Ticket from "../../models/Ticket";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const ticket = await Ticket.findById(id);
        if (!ticket) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: ticket });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const ticket = await Ticket.create(req.body);

        res.status(201).json({ success: true, data: ticket });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const ticket = await Ticket.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!ticket) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: ticket });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedTicket = await Ticket.deleteOne({ _id: id });
        if (!deletedTicket) {
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
