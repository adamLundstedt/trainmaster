import BackButton from "../components/BackButton";
import Link from "next/link";
import ExitButton from "../components/ExitButton";
import { useState, useEffect } from "react";
import { useAppContext } from "../my-app/context/AppContext";

import Image from "next/image";

export default function ChooseTrain() {
  const [appState, setAppState] = useAppContext();
  

  const [validRoutes, setValidRoutes] = useState(appState.validRoutes);
  const [chosenDepartureStation, setChosenDepartureStation] = useState(
    appState.chosenDepartureStation
  );
  const [chosenDestinationStation, setChosenDestinationStation] = useState(
    appState.chosenDestinationStation
  );
  

  console.log("valid routes from choose-train: ", validRoutes);

  let filteredRoutes = [];

  function setRoutesFiltered() {
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
        filteredRoutes.push(validRoute);
      }
    }

    console.log("filtered routes: ", filteredRoutes);
  }

  let validTrains = [];

  function setTrainsValid() {
    for (let timetable of timetables) {
      for (let filteredRoute of filteredRoutes) {
        if (timetable.routeId == filteredRoute._id) {
          validTrains.push(timetable);
        }
      }
    }
  }

  let departuresFromChosenStation = [];
  let arrivalsToChosenStation = [];

  function setArrivalsAndDepartures() {
    let minutesToAddDeparture = [];
    let minutesToAddDestination = [];

    for (let filteredRouteDeparture of filteredRoutes) {
      for (let departureStation of filteredRouteDeparture.stations) {
        if (departureStation.station == appState.chosenDepartureStation) {
          minutesToAddDeparture.push({
            routeId: filteredRouteDeparture._id,
            station: departureStation.station,
            minutesToAdd: departureStation.departure,
          });
        }
      }
    }

    for (let filteredRouteDestination of filteredRoutes) {
      for (let destinationStation of filteredRouteDestination.stations) {
        if (destinationStation.station == appState.chosenDestinationStation) {
          minutesToAddDestination.push({
            routeId: filteredRouteDestination._id,
            station: destinationStation.station,
            minutesToAdd: destinationStation.arrival,
          });
        }
      }
    }

    console.log("minutesToAdd: ", minutesToAddDestination);

    function padToTwoDigits(num) {
      return num.toString().padStart(2, "0");
    }

    function toHoursAndMinutes(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return { hours: hours, minutes: minutes };
    }

    function calculateDepartureFromChosenStation(
      departureTimeFromOrigin,
      minutesToAddString
    ) {
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

    function calculateArrivalToChosenStation(
      departureTimeFromOrigin,
      minutesToAddString
    ) {
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
          minuteToAddDeparture.station == appState.chosenDepartureStation
        ) {
          departureTime = calculateDepartureFromChosenStation(
            train.departureTimeFromOrigin,
            minuteToAddDeparture.minutesToAdd
          );
        }
      }
      departuresFromChosenStation.push({
        routeId: train.routeId,
        station: appState.chosenDepartureStation,
        time: departureTime,
      });
    }

    for (let train of validTrains) {
      let arrivalTime;

      for (let minuteToAddDestination of minutesToAddDestination) {
        if (
          train.routeId == minuteToAddDestination.routeId &&
          minuteToAddDestination.station == appState.chosenDestinationStation
        ) {
          arrivalTime = calculateArrivalToChosenStation(
            train.departureTimeFromOrigin,
            minuteToAddDestination.minutesToAdd
          );
        }
      }

      arrivalsToChosenStation.push({
        routeId: train.routeId,
        station: appState.chosenDestinationStation,
        time: arrivalTime,
      });
    }

    console.log(
      "departures from chosen station: ",
      departuresFromChosenStation
    );
    console.log("arrivals to chosen station: ", arrivalsToChosenStation);
  }

  const [infoToShow, setInfoToShow] = useState({
    validTrains: validTrains,
    chosenDepartureStation: chosenDepartureStation,
    chosenDestinationStation: chosenDestinationStation,
    departuresFromChosenStation: departuresFromChosenStation,
    arrivalsToChosenStation: arrivalsToChosenStation,
  });

  useEffect(() => {
    setRoutesFiltered();
    setTrainsValid();
    setArrivalsAndDepartures();    
  }, [setRoutesFiltered(), setTrainsValid(), setArrivalsAndDepartures()]);

  console.log("info to show: ", infoToShow);

  console.log("valid trains: ", validTrains);

  console.log("valid routes from choose-train: ", validRoutes);

  console.log(
    "chosen departure station from choose train: ",
    appState.chosenDepartureStation
  );
  console.log(
    "chosen destination station from choose train: ",
    appState.chosenDestinationStation
  );

  console.log("timetables: ", timetables);

  let appStateCopy = appState;

  function getTrainId(index) {

    
    let listOfTrains = [];

    for(let train of trains) {
      for(let validTrain of validTrains) {
        if (train.routeId == validTrain.routeId) {
          listOfTrains.push(train)
          
        }
        
      }
      
    }
    console.log("listOfTrains", listOfTrains)
    
    let trainId = listOfTrains[0]._id

    
    appStateCopy.trainId = trainId;
    setAppState(appStateCopy);    
    
  }
  

  

  


  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6"></a>
      <div className="bg-gray-600 bg-opacity-70  ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
          <div>
            {infoToShow.validTrains.map((validTrain, index) => (
              <div key={index}>
                <div className="text-lg">
                  {validTrain.routeName}
                  <div className="text-lg">
                    Avgång: &nbsp;
                    {infoToShow.chosenDepartureStation}
                    &nbsp;
                    Tid: &nbsp;
                    {infoToShow.departuresFromChosenStation[index].time}
                  </div>
                  <div className="text-lg">
                    Ankomst: &nbsp;
                    {infoToShow.chosenDestinationStation}
                    &nbsp;
                    Tid: &nbsp;
                    {infoToShow.arrivalsToChosenStation[index].time}
                  </div>
                  <Link  href="choose-seats">
                  <div className="mx-4 opacity-25 hover:opacity-100 hover:cursor-pointer ">
                    <Image onClick={getTrainId(index)} src="/train.png" width={250} height={50} />
                    
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


