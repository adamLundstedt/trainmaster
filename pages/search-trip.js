import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import ExitButton from "../components/ExitButton";
import Link from "next/link";
import NewDatePicker from "../components/DatePicker";
import { useStates } from '../lib/states';

const typeOfTicket = [
  { id: 1, name: "1 vuxen" }, //ska vi lägga till priset här också?
  { id: 2, name: "1 barn" },
  { id: 3, name: "1 student" },
  { id: 5, name: "1 senior" },
];

const stations = [
  { id: 1, name: "Stockholm C" },
  { id: 2, name: "Sundbyberg" },
  { id: 3, name: "Bålsta" },
  { id: 4, name: "Enköping" },
  { id: 5, name: "Västerås C"},
  { id: 6, name: "Köping" },
  { id: 7, name: "Arboga" },
  { id: 8, name: "Örebro C" },
  { id: 9, name: "Örebro Södra" },
  { id: 10, name: "Kumla" },
  { id: 11, name: "Hallsberg" },
  { id: 12, name: "Laxå" },
  { id: 13, name: "Töreboda" },
  { id: 14, name: "Skövde C" },
  { id: 15, name: "Falköping C" },
  { id: 16, name: "Herrljunga" },
  { id: 17, name: "Vårgårda" },
  { id: 18, name: "Alingsås" },
  { id: 19, name: "Göteborg C" },
  { id: 20, name: "Mölndal" },
  { id: 21, name: "Kungsbacka" },
  { id: 22, name: "Åsa" },
  { id: 23, name: "Varberg" },
  { id: 24, name: "Falkenberg" },
  { id: 25, name: "Halmstad C" },
  { id: 26, name: "Laholm" },
  { id: 27, name: "Båstad" },
  { id: 28, name: "Ängelholm" },
  { id: 29, name: "Helsingborg C" },
  { id: 30, name: "Landskrona" },
  { id: 31, name: "Lund C" },
  { id: 32, name: "Malmö C" },
  { id: 33, name: "Triangeln" },
  { id: 34, name: "Hyllie" },
  { id: 35, name: "Ramlösa" },
  { id: 36, name: "Rydebäck" },
  { id: 37, name: "Glumslöv" },
  { id: 38, name: "Häljarp" },
  { id: 39, name: "Dösjebro" },
  { id: 40, name: "Kävlinge" },
  { id: 41, name: "Gunnesbo" },
  { id: 42, name: "Åkarp" },
  { id: 43, name: "Burlöv" },
  { id: 47, name: "Svågertorp/Malmö Syd" },
  { id: 48, name: "Västra Ingelstad" },
  { id: 49, name: "Östra Grevie" },
  { id: 50, name: "Trelleborg" },
];
 
export default function SearchTrip() {
  let s = useStates('main');
  console.log('routes from search trips', s.routes);
  console.log('users from search trips', s.users);
  const [startDatePickerShown, setStartDatePickerShown] = useState(false);
  const [endDatePickerShown, setEndDatePickerShown] = useState(false);
  const [startDateText, setStartDateText] = useState("Datum avresa");
  const [endDateText, setEndDateText] = useState("Datum hemresa");


  function getStartDateAndPutInMyTextField(date) {
    setStartDateText(date.toISOString().split("T")[0]);
    toggleStartDatePicker();
  }

  function getEndDateAndPutInAnotherTextField(date) {
    setEndDateText(date.toISOString().split("T")[0]);
    toggleEndDatePicker();
  }

  function toggleStartDatePicker() {
    setStartDatePickerShown(!startDatePickerShown);
  }

  function toggleEndDatePicker() {
    setEndDatePickerShown(!endDatePickerShown);
  }

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white font-bold text-[25px] ml-36 ">Sök resa</a>
      <div className="grid grid-cols-2 mt-4 items-center w-full">
        <div className="w-[150px] ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
          <MyStationList />
        </div>
        <div className="w-[150px] ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
          <MyStationList />
        </div>
        <div
          className="w-[150px]  mt-4 ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm"
          onClick={toggleStartDatePicker}
        ><ChevronUpDownIcon
            className="h-5 w-5 absolute text-white"
            aria-hidden="true"
          />
          {startDateText}
        </div>
        <div
          className="w-[150px] mt-4 ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm"
          onClick={toggleEndDatePicker}
        >  <ChevronUpDownIcon
            className="h-5 w-5 absolute text-white"
            aria-hidden="true"
          />
          {endDateText}

        </div>
        <div>
          <div className={startDatePickerShown ? "" : "hidden"}>
            <NewDatePicker dateSetter={getStartDateAndPutInMyTextField} />
          </div>
        </div>
        <div>
          <div className={endDatePickerShown ? "" : "hidden"}>
            <NewDatePicker dateSetter={getEndDateAndPutInAnotherTextField} />
          </div>
        </div>
      </div>

      <div className="mt-5 text-[15px]">
        <MyListBox />
        <button
          onClick={() => AddTraveller()}
          className="text-white text-[12px] ml-4"
        >
          + Lägg till resenär
        </button>
      </div>
      <div className="ml-36 mt-16">
        <Link href="/">
          <a className="text-white px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Sök resa
          </a>
        </Link>
      </div>
    </div>
    //</div>
  );
}

function MyListBox() {
  const [selected, setSelected] = useState(typeOfTicket[0]);

  return (
    <div className="ml-4 bg-gray-400 rounded text-white mr-5">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-grey  pr-10 text-center shadow-md    ">
            <span className="block truncate">{selected.name}</span>
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-full rounded-md bg-gray-400 py-1 shadow-lg ">
              {typeOfTicket.map((type, typeIdx) => (
                <Listbox.Option
                  key={typeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none text-[14px] pl-8 pr-4 ${active ? "bg-gray-600 text-white" : " text-white"
                    }`
                  }
                  value={type}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : " font-normal"
                          }`}
                      >
                        {type.name}
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
      </Listbox >
    </div >
  );
}

function MyStationList() {
  const [selected, setSelected] = useState(stations[0]);

  return (
    <div className="ml-4 bg-gray-400 rounded text-white mr-5 z-index-5">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-grey  pr-10 text-center shadow-md    ">
            <span className="block truncate">Välj station</span>
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-full rounded-md bg-gray-400 py-1 shadow-lg ">
              {stations.map((type, typeIdx) => (
                <Listbox.Option
                  key={typeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none text-[14px] pl-8 pr-4 ${active ? "bg-gray-600 text-white" : " text-white"
                    }`
                  }
                  value={type}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : " font-normal"
                          }`}
                      >
                        {type.name}
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
      </Listbox >
    </div >
  );
}
