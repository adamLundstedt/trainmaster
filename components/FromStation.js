import { useState } from "react";

export default function FromStation({ routes, setStationDeparture }) {
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

  const [text, setText] = useState("");
  const [departureStations, setDepartureStations] = useState(fromStations);
  const [suggestions, setSuggestions] = useState([]);

  const OnSuggestHandler = (text) => {
    setText(text);
    setStationDeparture(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = departureStations.filter((station) => {
        const regex = new RegExp(`${text}`, "gi");
        return station.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
    setStationDeparture(text);
  };

  return (
    <div className="w-[150px] ml-4 absolute z-10 mx-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
      <input
        className="placeholder-white text-center bg-gray-400 rounded"
        type="text"
        placeholder="Från"
        id="from"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      ></input>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div key={i} onClick={() => OnSuggestHandler(suggestion)}>
            {suggestion}
          </div>
        ))}
    </div>
  );
}
