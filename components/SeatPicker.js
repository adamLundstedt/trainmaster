import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";

export default function SeatPicker(trains, coaches, bookings, tickets, routes) {
  
  const chosenTrainId = '632ac4233b9bdbfc822b4d13';    

    
    return (
      <div></div>
    );

    
}

export async function getStaticProps(chosenTrainId) {
    const { db } = await connectToDatabase();  
    mongo.s;
    const chosenTrain = await db.collection("trains").find({_id : chosenTrainId}).toArray(); 
    const routes = await db.collection("routes").find({}).toArray(); 
    const trains = await db.collection("trains").find({}).toArray();
    const coaches = await db.collection("coaches").find({}).toArray();
    const bookings = await db.collection("bookings").find({}).toArray();
    const tickets = await db.collection("tickets").find({_id : chosenTrainId}).toArray();
    return {
      props: {
        routes: JSON.parse(JSON.stringify(routes)),
        trains: JSON.parse(JSON.stringify(trains)),
        coaches: JSON.parse(JSON.stringify(coaches)),
        bookings:  JSON.parse(JSON.stringify(bookings)),
        tickets:  JSON.parse(JSON.stringify(tickets)),
      },
    };
  }

  