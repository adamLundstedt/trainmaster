import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb"; 
import { useStates } from '../lib/states';
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Container from "../components/Container";


export default function SearchStation({ routes }) {
  const [selectedStation, setSelectedStation] = useState("Välj Station");
  let s = useStates('main');

  console.log('routes from search stations', s.routes);
  console.log('users from search stations', s.users);

  const routeOne = "Stockholm C - Göteborg C";
  const routeTwo = "Göteborg C - Hyllie";
  const routeThree = "Helsingborg C - Trelleborg";
  
  let allStations = [];
  let stationsInOne = [];
  
  

  for (let route of routes) {
    if (route.routeName == routeOne) {
      for (let station of route.stations) {
        allStations.push(station.station)
      }
    }
    if (route.routeName == routeTwo) {
      for (let station of route.stations) {
        allStations.push(station.station)
      }
    }
    if (route.routeName == routeThree) {
      for (let station of route.stations) {
        allStations.push(station.station)
       
      }
    }
  }

  for(let route of routes){
    if (route.routeName == routeOne) {
      for (let station of route.stations) {
        stationsInOne = route.stations
      }
    }
  }
  
  function removeDuplicateStations(allStations) {
    return allStations.filter((item, index) => allStations.indexOf(item) === index);
  }
  
  let filteredStations = [...removeDuplicateStations(allStations)];
  const listStations = [...removeDuplicateStations(allStations)];
  

  console.log("This is filteredStations: " + filteredStations);
  console.log(filteredStations)
  console.log(stationsInOne)
  
  
  

  return (
    <Container>
      <Listbox as="div" value={selectedStation} onChange={setSelectedStation}>
        {({ open }) => (
          <>
            {/* <Listbox.Label className="text-sm font-medium text-gray-700 ">
              Välj Station
            </Listbox.Label> */}
            <div className="relative rounded-md bg-gray-400 ">
              <span className="inline-block w-full">
                <Listbox.Button  className="pl-3 py-2 w-full rounded-lg bg-gray-400 shadow-md text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 relative border shadow-sm border-gray-300 rounded text-gray-800">
                  <span className="block truncate">{selectedStation}</span>
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
                  {listStations.map((station) => (
                    <Listbox.Option key={station} value={station}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active
                              ? "text-white bg-gray-600"
                              : "text-gray-900"
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
      </Container>
  );
}
 
 export async function getServerSideProps() {
  
  const { db } = await connectToDatabase();
  mongo.s;

  const routeData = await db.collection("routes").find({}).toArray();

  const routes = JSON.parse(JSON.stringify(routeData));


  
 
  return {
    props: {
      routes: routes,

    },
  };
  

  
} 

