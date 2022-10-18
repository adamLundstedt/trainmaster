import { useState } from "react";
import { useAppContext } from "../my_app/context/AppContext";

export default function ToStation({ routes }) {
  const [appState, setAppState] = useAppContext();

  const chosenDepartureStation = appState;

  console.log("chosen departure station from To: ", chosenDepartureStation);
  console.log("routes: ", routes);

  let validRoutes = [];

  for (let route of routes) {
    for (let station of route.stations) {
      if (
        chosenDepartureStation == station.station &&
        route.stations[route.stations.length - 1].station !=
          chosenDepartureStation
      ) {
        validRoutes.push(route);
      }
    }
  }

  let validDestinationStations = [];

  let chosenStationFound = false;  

  for (let validRoute of validRoutes) {
    
    for (let station of validRoute.stations) {
      if(chosenStationFound && station.station != chosenDepartureStation && !validDestinationStations.includes(station.station)) {
        validDestinationStations.push(station.station)
      }
      if(station.station == chosenDepartureStation) {
        chosenStationFound = true;
      }
    }
  }

  
  console.log("valid destination stations: ", validDestinationStations);

  console.log("valid routes: ", validRoutes);

  let fromStations = [];
  let stationNameInArray = false;

  for (let route of routes) {
    for (let station of route.stations) {
      stationNameInArray = false;
      for (let fromStation of fromStations) {
        if (station.station == fromStation) {
          stationNameInArray = true;
        }
      }
      if (!stationNameInArray) {
        fromStations.push(station.station);
      }
    }
  }

  const [text2, setText2] = useState("");
  const [destinationStations, setDestinationStations] = useState(validDestinationStations);
  const [suggestions2, setSuggestions2] = useState([]);
  let chosenDestinationStation = text2;

  let bookingInfo = {chosenDepartureStation, chosenDestinationStation, validRoutes};  

  const OnSuggestHandler = (text2) => {
    setText2(text2);
    setSuggestions2([]);    
    
  }

  const onChangeHandler = (text2) => {
    let matches2 = [];
    if(text2.length > 0) {
        matches2 = destinationStations.filter(station2 => {
            const regex = new RegExp(`${text2}`, "gi");
            return station2.match(regex);
        })
    }    
    setSuggestions2(matches2);
    setText2(text2);
  } 

  return (
    <div className="w-[150px] ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
      <form>
        <label for="from">TILL</label>
        <input
          className="bg-gray-400"
          type="text"
          name="to"
          id="to"
          onChange={(e2) => onChangeHandler(e2.target.value)}
          value={text2}
        />
        {suggestions2 &&
          suggestions2.map((suggestion2, i) => (
            <div key={i} onClick={() => OnSuggestHandler(suggestion2)}>
              {" "}
              {suggestion2}
            </div>
          ))}
      </form>
    </div>
  );
}
