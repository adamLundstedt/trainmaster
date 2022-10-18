import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { connectToDatabase } from "../lib/mongodb";
import { Listbox, Transition } from "@headlessui/react";
import ExitButton from "../components/ExitButton";
import Link from "next/link";
import DatePicker from "../components/DatePicker";
import FromStation from "../components/FromStation";
import ToStation from "../components/ToStation";


const typeOfTicket = [
  { id: 1, name: "1 vuxen" },
  { id: 2, name: "1 barn" },
  { id: 3, name: "1 student" },
  { id: 4, name: "1 senior" },
];

export default function SearchTrip({ routes }) {
  const [startDatePickerShown, setStartDatePickerShown] = useState(false);
  const [endDatePickerShown, setEndDatePickerShown] = useState(false);
  const [startDateText, setStartDateText] = useState("Datum avresa");
  const [endDateText, setEndDateText] = useState("Datum hemresa");
  const [travelers, setTravelers] = useState([{ id: 1, type: "1 vuxen" }]);

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

  const removeItems = (i) => {
    const arr = Array.filter((item) => item.i !== i);
    setItems(arr);
  };

  console.log("start date text: ", startDateText);
  console.log("end date text: ", endDateText);
  console.log("travelers: ", travelers)

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white font-bold text-[25px] ml-36 ">Sök resa</a>
      <div className="grid grid-cols-2 mt-4 items-center w-full">
        <div>
          <FromStation routes={routes} />
        </div>
        <div>
          <ToStation routes={routes} />
        </div>



        <div
          className="w-[150px]  mt-4 ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm"
          onClick={toggleStartDatePicker}
        >
          <ChevronUpDownIcon
            className="h-5 w-5 absolute text-white"
            aria-hidden="true"
          />
          {startDateText}
        </div>
        <div
          className="w-[150px] mt-4 ml-4 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm"
          onClick={toggleEndDatePicker}
        >
          {" "}
          <ChevronUpDownIcon
            className="h-5 w-5 absolute text-white"
            aria-hidden="true"
          />
          {endDateText}
        </div>
        <div>
          <div className={startDatePickerShown ? "" : "hidden"}>
            <DatePicker dateSetter={getStartDateAndPutInMyTextField} />
          </div>
        </div>
        <div>
          <div className={endDatePickerShown ? "" : "hidden"}>
            <DatePicker dateSetter={getEndDateAndPutInAnotherTextField} />
          </div>
        </div>
      </div>

      <div className="mt-5 text-[15px]">
        <div className="mb-4">
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
        <Link href="/">
          <a className="text-white px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Sök resa
          </a>
        </Link>
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
    <div className="ml-4 bg-gray-400 rounded text-white mr-5">
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

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const routesData = await db.collection("routes").find({}).toArray();
  const routes = JSON.parse(JSON.stringify(routesData));

  return {
    props: {
      routes: routes,
    },
  };
}
