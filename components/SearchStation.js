import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Container from "../components/Container";

export default function SearchStation({ routes }) {
  const [selectedStation, setSelectedStation] = useState("Välj Station");

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
    <Listbox as="div" value={selectedStation} onChange={setSelectedStation}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="text-sm font-medium text-gray-700 ">
              Välj Station
            </Listbox.Label> */}
          <div className="relative rounded-md bg-gray-400 ">
            <span className="inline-block w-full">
              <Listbox.Button className="pl-3 py-2 w-full rounded-lg bg-gray-400 shadow-md text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 relative border shadow-sm border-gray-300 rounded text-gray-800">
                <span className="block truncate">
                  <form>
                
                    <input
                      className="bg-gray-400"
                      type="text"
                      name="from"
                      id="from"
                      onChange={(e) => onChangeHandler(e.target.value)}
                      value={text}
                    />
                  </form>
                </span>
              </Listbox.Button>
            </span>
            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="overflow-auto  h-40 rounded mt-1 rounded-md bg-gray-400 shadow-m"
              >
                {fromStations.map((station) => (
                  <Listbox.Option key={station} value={station}>
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active ? "text-white bg-gray-600" : "text-gray-900"
                        } cursor-default select-none relative py-2 pl-10 pr-4`}
                      >
                        <span
                          className={`${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {station}
                        </span>

                        {selected && (
                          <span
                            className={`${
                              active ? "text-white" : "text-indigo-600"
                            } absolute inset-y-0 left-0 flex items-center pl-2`}
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
