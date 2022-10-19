import { useState } from "react";


export default function ToStation({
  routes,
  chosenDepartureStation,    
  setRoutes,
  setStationDestination, 
  setState,
}) {

  
  let validRoutes = [];  

  
  for (let route of routes) {
    for (let station of route.stations) {
      if (
        chosenDepartureStation == station.station &&
        route.stations[route.stations.length - 1].station != chosenDepartureStation
               
        ) {
        validRoutes.push(route);
      }
    }
  }

  let validDestinationStations = [];

  let chosenStationFound = false;

  for (let validRoute of validRoutes) {
    for (let station of validRoute.stations) {
      if (
        chosenStationFound &&
        station.station != chosenDepartureStation &&
        !validDestinationStations.includes(station.station)
      ) {
        validDestinationStations.push(station.station);
      }
      if (station.station == chosenDepartureStation) {
        chosenStationFound = true;
      }
    }
  }

  const [destinationStations, setDestinationStations] = useState(
    validDestinationStations
  );

  console.log("valid destination stations: ", validDestinationStations);

  const [text, setText] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const OnSuggestHandler = (text) => {
    setText(text);
    setStationDestination(text);   
    setSuggestions([]);
    setDestinationStations(validDestinationStations); 
    setRoutes(validRoutes);       
    setState();
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = destinationStations.filter((station) => {
        const regex = new RegExp(`${text}`, "gi");
        return station.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
    setStationDestination(matches.toString());    
    setRoutes(validRoutes);
    setDestinationStations(validDestinationStations);    
    setState();
  };

  return (
    <div className="w-[150px] ml-4 absolute z-10 mx-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
      <input
        className="placeholder-white text-center bg-gray-400 rounded"
        type="text"
        placeholder="Till"
        id="to"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      ></input>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div key={i} onClick={() => OnSuggestHandler(suggestion)}>
            {" "}
            {suggestion}
          </div>
        ))}
    </div>
  );
}
