import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";



export default function SearchStation({ routes }) {

  const routeOne = "Stockholm C - Göteborg C";
  const routeTwo = "Göteborg C - Hyllie";
  const routeThree = "Helsingborg C - Trelleborg";
  
  let allStations = [];
  
  

  for (let route of routes) {
    if (route.routeName == routeOne) {
      for (let station of route.stations) {
        allStations.push(station.station)
      }
    }
    if (route.routeName == routeTwo) {
      for (let station of route.stations) {
        allStations.push(station.station)
      }
    }
    if (route.routeName == routeThree) {
      for (let station of route.stations) {
        allStations.push(station.station)
       
      }
    }
  }
  
  function removeDuplicateStations(allStations) {
    return allStations.filter((item, index) => allStations.indexOf(item) === index);
  }
  let filteredStations = [...removeDuplicateStations(allStations)];
  

  /* console.log("This is allStations: " + allStations);
  console.log("How many in allStations: " + allStations.length); 
  console.log(removeDuplicateStations(allStations)); */
  console.log("This is filteredStations: " + filteredStations);
  console.log(filteredStations)
  
  
  

  return (
    <div> {filteredStations.map((station) => (
      <ul>
        <li>{station}</li>
      </ul>
    ))}
      
    </div>
  );
}
 
export async function getServerSideProps(context) {
  
  const { db } = await connectToDatabase();
  mongo.s;

  const routeData = await db.collection("routes").find({}).toArray();
  const stationData = await db.collection("stations").find({}).toArray();

  const routes = JSON.parse(JSON.stringify(routeData));
  const stations = JSON.parse(JSON.stringify(stationData));


  
 
  return {
    props: {
      routes: routes,
      stations: stations,

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

