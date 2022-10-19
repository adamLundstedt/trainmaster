import BackButton from "../components/BackButton";
import Link from "next/link";
import ExitButton from "../components/ExitButton";
import { useState } from "react";
import { useAppContext } from "../my-app/context/AppContext";
import { connectToDatabase } from "../lib/mongodb";
import Image from "next/image";

export default function ChooseTrain({timetables}) {

  const [appState, setAppState] = useAppContext();

  const [validRoutes, setValidRoutes] = useState(appState.validRoutes);  

  const[trainsToShow, setTrainsToShow] = useState();

  let validTrains = [];

  for(let timetable of timetables) {
    for(let validRoute of validRoutes) {
      if(timetable.routeId == validRoute._id) {
        validTrains.push(timetable);
      }
    }
  }

  let departuresFromChosenStation = [];

  for(let train of validTrains) {
    departuresFromChosenStation.push({"station": appState.chosenDepartureStation, "time": train.departureTimeFromOrigin});
  }

  console.log("departures from chosen station: ", departuresFromChosenStation);

  console.log("valid trains: ", validTrains);

  console.log("valid routes from choose-train: ", validRoutes);

  console.log("chosen destionation station from choose train: ", appState.chosenDepartureStation);

  console.log("timetables: ", timetables)

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6">Tider för utresa</a>
      <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
         <div>
          <Image src="/train.png" width={250} height={50}/>
         </div>

        </div>
      </div>

      <div className="ml-28 m-5 ">
        <BackButton />
        <Link href="/choose-seats">
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10
           bg-gray-400">
            Nästa
          </a>
        </Link>
      </div>
    </div>

  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const timetablesData = await db.collection("timetables").find({}).toArray();
  const timetables = JSON.parse(JSON.stringify(timetablesData));

  return {
    props: {
      timetables: timetables,
    },
  };
}



