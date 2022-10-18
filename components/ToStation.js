import { useState } from "react";
import { useAppContext } from "../my_app/context/AppContext";

export default function ToStation({ routes }) {
  const [appState, setAppState] = useAppContext();



  console.log("app state from toStation: ", appState);

  let chosenDepartureStation = appState;


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
      if (chosenStationFound && station.station != chosenDepartureStation && !validDestinationStations.includes(station.station)) {
        validDestinationStations.push(station.station)
      }
      if (station.station == chosenDepartureStation) {
        chosenStationFound = true;
      }
    }
  }


  console.log("valid destination stations: ", validDestinationStations);

  console.log("valid routes: ", validRoutes);



  const [text, setText] = useState("");
  const [destinationStations, setDestinationStations] = useState(validDestinationStations);
  const [suggestions, setSuggestions] = useState([]);
  let chosenDestinationStation = text;
  console.log("chosen destination station: ", chosenDestinationStation)


  const OnSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = destinationStations.filter((station) => {
        const regex = new RegExp(`${text}`, "gi");
        return station.match(regex);
      });
    }
    console.log("matches: ", matches);
    setSuggestions(matches);

    setText(text);
  };

  return (
    < div className="w-[150px] ml-4 absolute z-10 mx-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm" >
      <input
        className="placeholder-white text-center bg-gray-400 rounded"
        type="text"
        placeholder="Till"
        id="to"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      ></input>
      {
        suggestions &&
        suggestions.map((suggestion, i) => (
          <div key={i} onClick={() => OnSuggestHandler(suggestion)}>
            {" "}
            {suggestion}
          </div>
        ))
      }

    </div >
  );
}
