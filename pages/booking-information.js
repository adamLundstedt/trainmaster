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

  const [mail, setMail] = useState();
  const [phone, setPhone] = useState();

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




  const [formValues, setFormValues] = useState([{ firstName: "", lastName: "" }])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);

  }

  useEffect(() => {
    for (let traveler of travelersToShow) {
      setFormValues([...formValues, { firstName: "", lastName: "" }])
    }
  }, [travelersToShow])

  useEffect(() => {
    let appStateCopy = JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.chosenSeats.names = formValues;
    setAppState(appStateCopy);
    console.log("app State", appState)
  }, [formValues])

  function handleMail(e) {
    let appStateCopy = JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.email = e.target.value;
    setAppState(appStateCopy);
    console.log(appState)

    setMail(e.target.value)
  }

  useEffect(() => {
    setMail(mail)


  }, [mail])

  useEffect(() => {
    let appStateCopy = JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.email = mail;
    setAppState(appStateCopy);
    console.log(appState)
  }, [mail])



  return (
    <div className="h-auto pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6">Vilka ska resa?</a>
      <div className="bg-gray-600 bg-opacity-70 h-auto ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
          <div className="m-1">
            Avgång från <b className="pl-2">{data.booking.chosenDepartureStation}</b> till <b>{data.booking.chosenDestinationStation}</b>
          </div>
          <div className="m-1">
            Avgångsdatum: <b className="pl-2">{data.booking.startDateText}</b> klockan
            <b className="pl-1">{data.booking.departureTime}</b>
          </div>
          <div>
            <form>
              {formValues.map((element, index) => (
                <div className="form-inline grid grid-cols-2 text-black" key={index}>
                  <input className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
                     drop-shadow-md shadow-black text-black rounded text-sm"
                    placeholder="Förnamn" autoComplete="off" type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />

                  <input className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
                   drop-shadow-md shadow-black text-black rounded text-sm" placeholder="Efternamn" autoComplete="off" type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
                </div>
              ))}

            </form>
          </div>

          <div className="text-white text-lg mt-4 mb-6">
            <a className="font-semibold">Hur vill du ha biljetten?</a>
          </div>
          <div className="rounded bg-white  ml-2 mr-2">
            <div className="grid grid-cols-2 place-items-center">
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
            <input onChange={(e) => handleMail(e)}
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
        <Link href="/payment">
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Nästa
          </a>
        </Link>
      </div>
    </div>
  );
}
