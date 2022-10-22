import { useState, useEffect } from "react";
import { useAppContext } from "../my-app/context/AppContext";

import Link from "next/link";
import ExitButton from "../components/ExitButton";
import BackButton from "../components/BackButton";

export default function BookingInformation() {
  const [appState, setAppState] = useAppContext();
  const [data, setData] = useState(appState);
  const [checked, setChecked] = useState({
    Email: false,
    Sms: false,
    GetFromStore: true,
  });
  const changeRadio = (e) => {
    setChecked(() => {
      return {
        Email: false,
        Sms: false,
        GetFromStore: false,
        [e.target.value]: true,
      };
    });
  };

  const renderTraveler = (
    <div className=" grid grid-cols-2">
      <input
        className=" h-4 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm"
        placeholder="Förnamn:"
        type="text"
      ></input>
      <input
        className=" h-4 mt-4 border mx-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
        placeholder="Efternamn:"
        type="text"
      ></input>
    </div>)
  
  

  let travelers = appState.booking.travelers;
  let travelersToShow = [];

  for (let traveler of travelers) {
    travelersToShow.push(renderTraveler)
  }

  console.log("How many travlers: ", travelers)
  console.log("render: ", travelersToShow)

  function createInfoToAppState() {
    let appStateCopy = JSON.parse(JSON.stringify(data));

    return appStateCopy;
  }

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6">Vilka ska resa?</a>
      <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
          {/* hämta informationen från biljetten */}
          <div>{"Stockholm C ----> Malmö C"}</div>
          <div>{"2022-09-29 ----> 2022-09-29"}</div>
          <>
            {travelersToShow}
          </>
          <div className="text-white text-lg mt-4 mb-6">
            <a className="font-semibold">Hur vill du ha biljetten?</a>
          </div>
          <div className="rounded bg-white  ml-2 mr-2">
            <div className="grid grid-cols-3 place-items-center">
              <div className="text-black items-center ">
                <input
                  type="radio"
                  value="Email"
                  checked={checked.Email}
                  name="choice"
                  className="mt-[5px] place-items-center "
                  onChange={changeRadio}
                />
                <a className="pl-1 text-[12px] text-center ">Email</a>
              </div>
              <div className="text-black items-center ">
                <input
                  type="radio"
                  value="Sms"
                  checked={checked.Sms}
                  name="choice"
                  className="mt-[5px] place-items-center "
                  onChange={changeRadio}
                />
                <a className="pl-1 text-[12px] text-center ">Sms</a>
              </div>
              <div className="text-black items-center ">
                <input
                  type="radio"
                  checked={checked.GetFromStore}
                  value="GetFromStore"
                  name="choice"
                  className="mt-[5px] place-items-center "
                  onChange={changeRadio}
                />
                <a className="pl-1 text-[12px] text-center ">Hämta ut</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <input
              className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Ange din mailadress"
              type="text"
            ></input>
            <input
              className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Ange ditt mobilnummer"
              type="text"
            ></input>
          </div>
          <div className="text-lg mt-3">Summa totalt: 300 SEK</div>
        </div>
      </div>
      <div className="ml-24 m-5 ">
        <BackButton />
        <Link href="/payment">
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Nästa
          </a>
        </Link>
      </div>
    </div>
  );
}
