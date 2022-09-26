import { mongo } from "mongoose";
import { useState } from "react";
import { connectToDatabase } from "../lib/mongodb";



export default function SearchStation({ routes }) {

  let stationsNames = [];

  for(let stationName of routes.stations)
  const [stationsName, setStationsName] = useState(routes);


  return (
    <div>
      
      {routes.map((route) => (
          <li key={route._id}>
            <h2>{route.}</h2>
            
          </li>
        ))}
      
    </div>
  );
}
 
export async function getServerSideProps(context) {
  
  const { db } = await connectToDatabase();
  mongo.s;

  const routes = await db.collection("routes").find({}).limit(5).toArray();
  const stations = await db.collection("stations").find({}).toArray();
  
 
  return {
    props: {
      routes: JSON.parse(JSON.stringify(routes))
    },
  };
  

  
}


/* export async function getStaticProps() {
  const { db } = await connectToDatabase();

  mongo.s;

  const coaches = await db.collection("coaches").find({}).limit(1000).toArray();
  const users = await db.collection("users").find({}).limit(1000).toArray();
  return {
    props: {
      coaches: JSON.parse(JSON.stringify(coaches)),
      users: JSON.parse(JSON.stringify(users)),
    },
  };
} 

export async function getServerSideProps(context) {    
   
  const { db } = await connectToDatabase();    
  
  const trainsData = await db.collection("trains").find({}).toArray();
  const ticketsData = await db.collection("tickets").find({}).toArray();
  const coachesData = await db.collection("coaches").find({}).toArray();
    
    
  const trains = JSON.parse(JSON.stringify(trainsData));
  const tickets = JSON.parse(JSON.stringify(ticketsData));
  const coaches = JSON.parse(JSON.stringify(coachesData));
   

  return {
    props: {        
      trains : trains,
      tickets : tickets,
      coaches : coaches,        
    },
  };
}*/

