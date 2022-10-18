import { useState } from "react";

export default function FromAndToStations({ routes }) {
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

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = departureStations.filter((station) => {
        const regex = new RegExp(`${text}`, "gi");
        return station.match(regex);
      });
    }
    console.log("matches: ", matches);
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div className="w-[150px] ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
      <form>
        <label for="from">FRÅN</label>
        <input
          className="bg-gray-400"
          type="text"
          name="from"
          id="from"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
      </form>
    </div>
  );
}