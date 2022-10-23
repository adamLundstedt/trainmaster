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
  const [travelersToShow, setTravelersToShow] = useState(data.booking.info);

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

  
  const [form, setForm] = useState([{
    firstName: "",
    lastName: "",    
  }]);

  const handleChange = (e, index) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let appStateCopy = JSON.parse(JSON.stringify(data));

    console.log("index: ", index);

    appStateCopy.booking.info[index].firstName = {
      ...form[index],
      [name]: value,
    };
    
    console.log("handlechange ", appStateCopy.booking.info);

    setForm({
      ...form[index],
      [name]: value,
    });
  };

  
  

 

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6">Vilka ska resa?</a>
      <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
          {/* hämta informationen från biljetten */}
          <div>
            Avgång från <b>{data.booking.chosenDepartureStation}</b> till <b>{data.booking.chosenDestinationStation}</b>
          </div>
          <div>
            Avgångsdatum: <b>{data.booking.startDateText}</b> klockan{" "}
            <b>{data.booking.departureTime}</b>
          </div>
          <div>
            {travelersToShow.map((travelerToShow, index) => (
              <div>
                <div key={index}>
                  <div className="text-lg">
                    <div className=" grid grid-cols-2">
                      <form
                        id={form}
                        className="grid grid-cols-1 justify-items-center  "
                      >
                        <input                       
                          type="text"
                          maxLength="20"
                          name="firstName"
                          value={form.firstName}
                          required
                          placeholder="Förnamn"
                          onChange={(e) => handleChange(e, index)}
                          className="h-5 w-56 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm"
                        />

                        <input                        
                          type="text"
                          maxLength="20"
                          name="lastName"
                          value={form.lastName}
                          required
                          placeholder="Efternamn"
                          onChange={(e) => handleChange(e, index)}
                          className="h-5 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm w-56"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
