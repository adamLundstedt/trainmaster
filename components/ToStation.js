import { useState, useEffect } from "react";


export default function ToStation({routes,chosenDepartureStation,routesSet,setStationDestination}) {

  const [destinationStations, setDestinationStations] = useState();
  

  function calculateValidRoutes() {
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
  
  return validRoutes;

  }

  function calculateValidDestinationStations() {

    let validRoutes = calculateValidRoutes();
    
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
  return validDestinationStations;

  } 
  
  useEffect(() => {
    
    setDestinationStations(calculateValidDestinationStations());
   
  }, []);

  

  
  const [text, setText] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const OnSuggestHandler = (text) => {
    setText(text);
    setStationDestination(text);   
    setSuggestions([]);    
    routesSet(calculateValidRoutes());       
    
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
    routesSet(calculateValidRoutes());
    setDestinationStations(calculateValidDestinationStations());    
    
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
