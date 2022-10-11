import BackButton from "../components/BackButton";
import Link from "next/link";
import ExitButton from "../components/ExitButton";


export default function BookingInformation() {
  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6">Vilka ska resa?</a>
      <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
          {/* hämta informationen från biljetten */}
          <div>{"Stockholm C ----> Malmö C"}</div>
          <div>{"2022-09-29 ----> 2022-09-29"}</div>
          <div className=" grid grid-cols-2">
            <input className=" h-4 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Förnamn"
              type="text">
            </input>
            <input className=" h-4 mt-4 border mx-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Efternamn"
              type="text">
            </input>
          </div>
          <div className=" grid grid-cols-2">
            <input className=" h-4 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Förnamn"
              type="text">
            </input>
            <input className=" h-4 mt-4 border mx-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Efternamn"
              type="text">
            </input>
          </div>
          <div className="text-white text-lg mt-4 mb-6">
            <a className="font-semibold">Hur vill du ha biljetten?</a>
          </div>
          <div className="rounded bg-white  ml-2 mr-2">
            <div className="grid grid-cols-3">
              <div className="text-black">
                <input
                  type="checkbox"
                  className="mt-2 "
                />Email </div>
              <div className="text-black">
                <input
                  type="checkbox"
                  className="mt-2 "
                />Sms </div>
              <div className="text-black items-center ">
                <input
                  type="checkbox"
                  className="mt-2 "
                />Hämta ut </div>
            </div>

          </div>
          <div className="grid grid-cols-1">
            <input className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Ange din mailadress"
              type="text">
            </input>
            <input className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Ange ditt mobilnummer"
              type="text"></input>
          </div>
          <div className="text-lg mt-3">Summa totalt: 300 SEK</div>
        </div>
      </div>
      <div className="ml-24 m-5 ">
        <BackButton />
        <Link href="/">
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Nästa
          </a>
        </Link></div>
    </div >
  )
}
