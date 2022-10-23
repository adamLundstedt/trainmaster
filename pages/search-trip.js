import {  Fragment, useRef, useState, useEffect } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useAppContext } from "../my-app/context/AppContext";
import {  Dialog, Listbox, Transition } from "@headlessui/react";
import ExitButton from "../components/ExitButton";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import DatePicker from "../components/DatePicker";
import FromStation from "../components/FromStation";
import ToStation from "../components/ToStation";



import Router, { useRouter } from 'next/router'


const typeOfTicket = [
  { id: 1, name: "1 vuxen" },
  { id: 2, name: "1 barn" },
  { id: 3, name: "1 student" },
  { id: 4, name: "1 senior" },
];

export default function SearchTrip() {

  const [appState, setAppState] = useAppContext();
  const [data, setData] = useState(appState);
  const [startDatePickerShown, setStartDatePickerShown] = useState(false);  
  const [startDateText, setStartDateText] = useState("Datum");  
  const [travelers, setTravelers] = useState([{ id: 1, type: "1 vuxen" }]);

  const [routes, setRoutes] = useState(data.routesST)
  const [chosenDepartureStation, setChosenDepartureStation] = useState(data.booking.chosenDepartureStation);
  const [chosenDestinationStation, setChosenDestinationStation] = useState(data.booking.chosenDestinationStation);  
  const [validRoutes, setvalidRoutes] = useState();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null)

  




  function getStartDateAndPutInMyTextField(date) {
    setStartDateText(date.toISOString().split("T")[0]);
    toggleStartDatePicker();
  }

  

  function toggleStartDatePicker() {
    setStartDatePickerShown(!startDatePickerShown);
  }

  

  const removeItems = (i) => {
    const arr = Array.filter((item) => item.i !== i);
    setItems(arr);
  };

  function setStationDeparture(givenStation) {
    setChosenDepartureStation(givenStation);
  }
  function setStationDestination(givenStation) {
    setChosenDestinationStation(givenStation);
  }

  function routesSet(givenRoutes) {
    setvalidRoutes(givenRoutes);

  }

  function createInfoToAppState(){
    let appStateCopy = JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.chosenDepartureStation = chosenDepartureStation;
    appStateCopy.booking.chosenDestinationStation = chosenDestinationStation;
    appStateCopy.booking.startDateText = startDateText;
    appStateCopy.booking.travelers = travelers;
    appStateCopy.booking.validRoutes = validRoutes;    

    for(let traveler of travelers) {
      appStateCopy.booking.info.push({"firstName": "", "lastName": "", "typeOfTycket": traveler.type})

    }
    
    return appStateCopy;
  }

  
  
  const router = useRouter();  
  

  function clickHandler(){

    setAppState(createInfoToAppState());
    

    let datum = false;
    let departure = true;
    let destination = true;

    if(startDateText != "Datum") {
      datum = true;
    }
   

    if(chosenDepartureStation == "") {
      departure = false;
    }

    if(chosenDestinationStation == "") {
      destination = false;
    }    
   
    console.log("departure", departure);
    console.log("destination", destination);
    console.log("datum", datum);

    
    
    if(datum && departure && destination) {
      datum = false;
      departure = false;
      destination = false;      
      
      router.push("/choose-train");
      
    }
    else setOpen(true)   
   

  }

  

  console.log("Chosen departure station: ", chosenDepartureStation);
  console.log("Chosen destination station: ", chosenDestinationStation);
  console.log("Start date text: ", startDateText);
  console.log("Travelers: ", travelers);

  

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <div>
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex mt-36 justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left pb-2">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 pt-5">
                    Vänligen kontrollera ifyllda fält!
                    </Dialog.Title>
                    <div className="mt-2">
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Uppfattat!
                  </button>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
      

      </div>
     
      <a className="text-white font-bold text-[25px] ml-36 ">Sök resa</a>
      <div className="grid grid-cols-2 mt-4 items-center w-full">
        <div className="mb-4 ">
          <FromStation
            routes={routes}
            setStationDeparture={setStationDeparture}
          />
        </div>
        <div className="mb-4">
          <ToStation
            routes={routes}
            chosenDepartureStation={chosenDepartureStation}
            routesSet={routesSet}
            setStationDestination={setStationDestination}
          />
        </div>
        <div>
          <div
            className="w-[150px]  mt-4 ml-4 grid grid-cols-1 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm"
            onClick={toggleStartDatePicker}
          >
            <ChevronUpDownIcon
              className="h-5 w-5 absolute text-white"
              aria-hidden="true"
            />
            {startDateText}
          </div>
          <div className={startDatePickerShown ? "" : "hidden"}>
            <DatePicker dateSetter={getStartDateAndPutInMyTextField} />
          </div></div>

       
      </div>

      <div className="mt-5 text-[15px]">
        <div className="mb-5">
          {travelers.map((x, i) => (
            <div key={i}>
              <MyListBox {...{ travelers, setTravelers, traveler: x }} />
              {i === 0 ? null : (
                <button
                  className="text-white text-[14px] pl-2 pr-2 rounded-md  ml-4"
                  onClick={() => {
                    setTravelers(travelers.filter((y) => y !== x));
                  }}
                >
                  - Ta bort resenär
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          className="text-white text-[14px] pl-2 pr-2 bg-gray-400 rounded-md  ml-4"
          onClick={() =>
            setTravelers([
              ...travelers,
              { id: travelers.length + 1, type: "1 vuxen" },
            ])
          }
        >
          + Lägg till resenär
        </button>
      </div>
      <div className="ml-36 mt-16">
       
          <button onClick={clickHandler} className="text-white px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Sök resa
          </button>
       
      </div>
    </div>
  );
}

function MyListBox(props) {
  let { travelers, setTravelers, traveler } = props;

  function change(type) {
    let index = travelers.findIndex(({ id }) => id === traveler.id);
    let newTravelers = travelers.slice();
    newTravelers[index] = { id: traveler.id, type };
    setTravelers(newTravelers);
  }

  return (
    <div className="ml-4 mb-2 bg-gray-400 rounded text-white mr-5">
      <Listbox value={traveler.type} onChange={change}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-grey  pr-10 text-center shadow-md    ">
            <span className="block truncate">{traveler.type}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" mt-1 max-h-60 w-full rounded-md bg-gray-400 py-1 shadow-lg ">
              {typeOfTicket.map(({ name, id }) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `relative cursor-default select-none text-[14px] pl-8 pr-4 ${active ? "bg-gray-600 text-white" : " text-white"
                    }`
                  }
                  value={name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : " font-normal"
                          }`}
                      >
                        {name}
                      </span>
                      {selected ? (
                        <span className="absolute  inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}



