import { useState, useEffect, Fragment, useRef } from "react";
import { useAppContext } from "../my-app/context/AppContext";
import {  Dialog, Listbox, Transition } from "@headlessui/react";
import Router, { useRouter } from 'next/router'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import ExitButton from "../components/ExitButton";
import BackButton from "../components/BackButton";


export default function BookingInformation() {
  const [appState, setAppState] = useAppContext();
  const [data, setData] = useState(appState);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null)

  const [checked, setChecked] = useState({
    Email: false,
    Sms: false,
    GetFromStore: true,
  });
  const [travelersToShow, setTravelersToShow] = useState(data.booking.info);

  const[mail, setMail] = useState();
  const[phone, setPhone] = useState();

  const router = useRouter();  

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

  
 

  const [formValues, setFormValues] = useState([{ firstName: "", lastName : ""}])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues); 
    
  }

  useEffect(() => {
    for(let traveler of travelersToShow) {
      setFormValues([])
      setFormValues([...formValues, { firstName: "", lastName: "" }])
    }
  }, [travelersToShow])
  
  useEffect(() => {
    let appStateCopy =  JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.names = formValues;
    setAppState(appStateCopy);
    
  },[formValues])

  function handleMail(e) {
    let appStateCopy =  JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.email = e.target.value;
    setAppState(appStateCopy);
    
    
    setMail(e.target.value)   
  }

  useEffect(() => {
    setMail(mail)
    

  },[mail])

  useEffect(() => {
    let appStateCopy =  JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.email = mail;
    setAppState(appStateCopy);
    
  }, [mail])



  function clickHandler(){

    let allFirstNames = true;
    let allLastNames = true;
    let thereIsMail = true;

    for(let name of appState.booking.names) {
      if(name.firstName == "") {
        allFirstNames = false
      }
    }
    
    for(let name of appState.booking.names) {
      if(name.lastName == "") {
        allLastNames = false
      }
    }

    if (appState.booking.email == "") {
      thereIsMail = false
    }

    console.log("all first names", allFirstNames)
    console.log("all last names", allLastNames)
    console.log("thereismail", thereIsMail)

    if(allFirstNames && allLastNames && thereIsMail) {
      allFirstNames = false;
      allLastNames = false;
      thereIsMail = false;      
      
      router.push("/booking-overview");
      
    }
    else setOpen(true) 
    

  }

 
 

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
          <form>
          {formValues.map((element, index) => (
            <div className="form-inline text-black" key={index}>
              
              <input className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Förnamn" autoComplete = "off" type="text" name="firstName" value={element.firstName || ""} onChange={e => handleChange(index, e)} />
              
              <input className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm" placeholder="Efternamn" autoComplete = "off" type="text" name="lastName" value={element.lastName || ""} onChange={e => handleChange(index, e)} />              
            </div>
          ))}
          
      </form>
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
            <input onChange = {(e) => handleMail(e)}
              className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Ange din mailadress"
              type="text"
            ></input>
           
          </div>
          <div className="text-lg mt-3">Summa totalt: 300 SEK</div>
        </div>
      </div>
      <div className="ml-24 m-5 ">
        <BackButton />
        <button onClick={clickHandler}>
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Nästa
          </a>
        </button>
      </div>
    </div>
  );
}
