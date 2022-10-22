import { connectToDatabase } from "../lib/mongodb";
import { useAppContext } from "../my-app/context/AppContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home({coaches, routes, tickets, timetables, trains}) {

  const [appState, setAppState] = useAppContext();



  const coachesST = JSON.parse(JSON.stringify(coaches));
  const routesST = JSON.parse(JSON.stringify(routes));
  const ticketsST = JSON.parse(JSON.stringify(tickets));
  const timetablesST = JSON.parse(JSON.stringify(timetables));
  const trainsST = JSON.parse(JSON.stringify(trains));

  const chosenDepartureStation = "";
  const chosenDestinationStation = "";
  const validRoutes = "";
  const startDateText = "";
  const departureTime = "";
  const arrivalTime = "";
 
  const travelers = "";
  const chosenTrainId = "";


  const booking = {chosenDepartureStation, chosenDestinationStation, validRoutes, startDateText, departureTime, arrivalTime, travelers, chosenTrainId}

  const data = {coachesST, routesST, ticketsST, timetablesST, trainsST, booking}

  console.log(appState)

  useEffect(() => {
    setAppState(data);
   
  }, []);



  return (
    <div className="h-screen w-full ">
      <Navbar />
      <div className="pt-[10px] text-white font-bold text-[25px] m-20 md:text-[80px] ">
        Vart vill du resa?
      </div>
      <Link href="/search-trip">
        <div className="w-[200px] ml-20 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
          Sök resa
        </div>
      </Link>

    </div >
  );
}


export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const coachesData = await db.collection("coaches").find({}).toArray();
  const coaches = JSON.parse(JSON.stringify(coachesData));

  const routesData = await db.collection("routes").find({}).toArray();
  const routes = JSON.parse(JSON.stringify(routesData));

  const ticketsData = await db.collection("tickets").find({}).toArray();
  const tickets = JSON.parse(JSON.stringify(ticketsData));

  const timetablesData = await db.collection("timetables").find({}).toArray();
  const timetables = JSON.parse(JSON.stringify(timetablesData));

  const trainsData = await db.collection("trains").find({}).toArray();
  const trains = JSON.parse(JSON.stringify(trainsData)); 
  

  return {
    props: {
      coaches: coaches,
      routes: routes,
      tickets: tickets,
      timetables: timetables,
      trains: trains,      
    },
  };
}