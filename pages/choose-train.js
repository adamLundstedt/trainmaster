import BackButton from "../components/BackButton";
import Link from "next/link";
import ExitButton from "../components/ExitButton";
import { useState, useEffect } from "react";
import { useAppContext } from "../my-app/context/AppContext";

import Image from "next/image";

export default function ChooseTrain() {
  const [appState, setAppState] = useAppContext();

  const [data, setData] = useState(appState);  

  const [validRoutes, setValidRoutes] = useState(data.booking.validRoutes);
  const [chosenDepartureStation, setChosenDepartureStation] = useState(data.booking.chosenDepartureStation);
  const [chosenDestinationStation, setChosenDestinationStation] = useState(data.booking.chosenDestinationStation);
  const [timetables, setTimeTables] = useState(data.timetablesST)

  const[filteredRoutes, setFilteredRoutes] = useState(filterRoutes());
  const[validTrains, setValidTrains] = useState(checkValidTrains());
  const[departuresFromChosenStation, setDeparturesFromChosenStation] = useState(setDepartures());
  const[arrivalsToChosenStation, setArrivalsToChosenStation] = useState(setArrivals());
  const[trains, setTrains] = useState(data.trainsST);
  const[trainId, setTrainId] = useState();  
  

  useEffect(() => {
    setFilteredRoutes(filterRoutes());   
  }, []);

  useEffect(() => {
    setValidTrains(checkValidTrains());   
  }, []);

  useEffect(() => {
    setDeparturesFromChosenStation(setDepartures());   
  }, []);

  useEffect(() => {
    setArrivalsToChosenStation(setArrivals());
  }, [])

  

  
  

  
 

  function filterRoutes() {
    
    let routes = []
    for (let validRoute of validRoutes) {
      let counterDeparture = 0;
      let counterDestination = 0;
      for (let station of validRoute.stations) {
        if (station.station != chosenDepartureStation) {
          counterDeparture++;
        } else if (station.station == chosenDepartureStation) {
          break;
        }
      }

      for (let station of validRoute.stations) {
        if (station.station != chosenDestinationStation) {
          counterDestination++;
        } else if (station.station == chosenDestinationStation) {
          break;
        }
      }
      if (counterDeparture < counterDestination) {
        routes.push(validRoute);
      }
    }   

    return routes;
    
  }  
  

  function checkValidTrains() {

    let trainsToCheck = []
    for (let timetable of timetables) {
      for (let filteredRoute of filteredRoutes) {
        if (timetable.routeId == filteredRoute._id) {
          trainsToCheck.push(timetable);
        }
      }
    }
    
    return trainsToCheck;
    
  }


  function padToTwoDigits(num) {
    return num.toString().padStart(2, "0");
  }

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours: hours, minutes: minutes };
  }

  

 
  function setDepartures() {

    let departuresFromStation = [];
    let minutesToAddDeparture = [];

    for (let filteredRouteDeparture of filteredRoutes) {
      for (let departureStation of filteredRouteDeparture.stations) {
        if (departureStation.station == chosenDepartureStation) {
          minutesToAddDeparture.push({
            routeId: filteredRouteDeparture._id,
            station: departureStation.station,
            minutesToAdd: departureStation.departure,
          });
        }
      }
    }

    function calculateDepartureFromChosenStation(departureTimeFromOrigin,minutesToAddString) {
      let hourString = departureTimeFromOrigin.slice(0, 2);
      let minutesString = departureTimeFromOrigin.slice(3, 5);

      let minutesToAdd = parseInt(minutesToAddString);
      let hour = parseInt(hourString);
      let minutes = parseInt(minutesString);

      let totalMinutes = minutes + minutesToAdd;

      let totalHoursAndMinutes = toHoursAndMinutes(totalMinutes);

      hour = hour + totalHoursAndMinutes.hours;
      if (hour > 23) {
        hour = 0 + (hour - 24);
      }

      minutes = totalHoursAndMinutes.minutes;

      let time = `${padToTwoDigits(hour)}:${padToTwoDigits(minutes)}`;

      return time;
    }

    for (let train of validTrains) {
      let departureTime;
      for (let minuteToAddDeparture of minutesToAddDeparture) {
        if (
          train.routeId == minuteToAddDeparture.routeId &&
          minuteToAddDeparture.station == chosenDepartureStation
        ) {
          departureTime = calculateDepartureFromChosenStation(train.departureTimeFromOrigin,minuteToAddDeparture.minutesToAdd);
        }
      }
      departuresFromStation.push({
        routeId: train.routeId,
        station: chosenDepartureStation,
        time: departureTime,
      });
    }

    return departuresFromStation;
  }

  function setArrivals() {

    let arrivalsToStation = [];
    let minutesToAddDestination = [];

    for (let filteredRouteDestination of filteredRoutes) {
      for (let destinationStation of filteredRouteDestination.stations) {
        if (destinationStation.station == chosenDestinationStation) {
          minutesToAddDestination.push({
            routeId: filteredRouteDestination._id,
            station: destinationStation.station,
            minutesToAdd: destinationStation.arrival,
          });
        }
      }
    }

    function calculateArrivalToChosenStation(departureTimeFromOrigin,minutesToAddString) {
      let hourString = departureTimeFromOrigin.slice(0, 2);
      let minutesString = departureTimeFromOrigin.slice(3, 5);

      let minutesToAdd = parseInt(minutesToAddString);
      let hour = parseInt(hourString);
      let minutes = parseInt(minutesString);

      let totalMinutes = minutes + minutesToAdd;

      let totalHoursAndMinutes = toHoursAndMinutes(totalMinutes);

      hour = hour + totalHoursAndMinutes.hours;
      if (hour > 23) {
        hour = 0 + (hour - 24);
      }

      minutes = totalHoursAndMinutes.minutes;

      let time = `${padToTwoDigits(hour)}:${padToTwoDigits(minutes)}`;

      return time;
    }

    for (let train of validTrains) {
      let arrivalTime;

      for (let minuteToAddDestination of minutesToAddDestination) {
        if (
          train.routeId == minuteToAddDestination.routeId &&
          minuteToAddDestination.station == chosenDestinationStation
        ) {
          arrivalTime = calculateArrivalToChosenStation(
            train.departureTimeFromOrigin,
            minuteToAddDestination.minutesToAdd
          );
        }
      }

      arrivalsToStation.push({
        routeId: train.routeId,
        station: chosenDestinationStation,
        time: arrivalTime,
      });
    }

    return arrivalsToStation;

  }

  console.log("valid trains: ", validTrains);

  let trainList = []

  for(let train of trains) {
    for(let validTrain of validTrains) {
      if(train.routeId == validTrain.routeId && validTrain.departureTimeFromOrigin) {
        trainList.push(train);
      }
    }
  }

  console.log("train list: ", trainList);

    
 

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6"></a>
      <div className="bg-gray-600 bg-opacity-70  ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
          <div>
            {validTrains.map((validTrain, index) => (
              <div key={index}>
                <div className="text-lg">
                  {validTrain.routeName}
                  <div className="text-lg">
                    Avgång: &nbsp;
                    {chosenDepartureStation}
                    &nbsp;
                    Tid: &nbsp;
                    {departuresFromChosenStation[index].time}
                  </div>
                  <div className="text-lg">
                    Ankomst: &nbsp;
                    {chosenDestinationStation}
                    &nbsp;
                    Tid: &nbsp;
                    {arrivalsToChosenStation[index].time}
                  </div>
                  <Link  href="choose-seats">
                  <div className="mx-4 opacity-25 hover:opacity-100 hover:cursor-pointer ">
                    <Image src="/train.png" width={250} height={50} />
                    
                    <br/>
                    <br/>
                    <br/>
                  </div>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>

          <div></div>
        </div>
      </div>

      <div className="ml-28 m-5 ">
        <BackButton />
        <Link href="/choose-seats">
          <a
            className="text-white ml-5 px-4 py-0.5 rounded-md mt-10
           bg-gray-400"
          >
            Nästa
          </a>
        </Link>
      </div>
    </div>
  );
}


