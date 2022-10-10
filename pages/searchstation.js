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
 
export async function getServerSideProps() {
  
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

