import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";



export default function SearchStation({ routes }) {

  const routeOne = "Stockholm C - Göteborg C";
  const routeTwo = "Göteborg C - Hyllie";
  const routeThree = "Helsingborg C - Trelleborg";


  let stationsInRouteOne = [];
  let stationsInRouteTwo = [];
  let stationsInRouteThree = [];
  let merged2 = [[stationsInRouteOne], [stationsInRouteTwo], [stationsInRouteThree]];
  let allStations = [];
  let merged = [...stationsInRouteOne, ...stationsInRouteTwo, ...stationsInRouteThree];
  let dropdownStations = {};
  let stationsList = [...new Set(merged2)];
  


   let merged3 = new Array(
    stationsInRouteOne,
    stationsInRouteTwo,
    stationsInRouteThree
  ); 

   for(let route of routes) {
    if (route.routeName == routeOne) {
      for(let station of route.stations) {
        stationsInRouteOne.push(station.station)
        allStations.push(station.station)
      }
     }
     if (route.routeName == routeTwo) {
      for(let station of route.stations) {
        stationsInRouteTwo.push(station.station)
        allStations.push(station.station)
      }
     }
     if (route.routeName == routeThree) {
      for(let station of route.stations) {
        stationsInRouteThree.push(station.station)
        allStations.push(station.station)
      }
    }
  }

  

  
  
  console.log("This is merged: " + merged);
  console.log("How many in merged: " + merged.length);
  console.log("This is merged2: " + merged2)
  console.log("How many in merged2: " + merged2.length);
  console.log("This is merged3: " + merged3);
  console.log("How many in merged3: " + merged3.length);
  console.log("This is routeOne: " + stationsInRouteOne)
  console.log("This is routeTwo: " + stationsInRouteTwo)
  console.log("This is routeThree: " + stationsInRouteThree)
  console.log("This is stationList: " + stationsList);
  console.log("How many in stationList: " + stationsList.length);
  console.log(stationsList);
  console.log("This is allStations: " + allStations);
  console.log("How many in allStations: " + allStations.length); 
  
  

  return (
    <div> {stationsList.map((station) => (
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

