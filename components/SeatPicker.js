import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";

export default function SeatPicker(trains, coaches, bookings, tickets) {

    
    return <h1>Seat Picker</h1>

    
}

export async function getStaticProps() {
    const { db } = await connectToDatabase();  
    mongo.s;  
    const trains = await db.collection("trains").find({}).toArray();
    const coaches = await db.collection("coaches").find({}).toArray();
    const bookings = await db.collection("bookings").find({}).toArray();
    const tickets = await db.collection("tickets").find({}).toArray();
    return {
      props: {
        trains: JSON.parse(JSON.stringify(trains)),
        coaches: JSON.parse(JSON.stringify(coaches)),
        bookings:  JSON.parse(JSON.stringify(bookings)),
        tickets:  JSON.parse(JSON.stringify(tickets)),
      },
    };
  }

  