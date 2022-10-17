import BackButton from "../components/BackButton";
import Link from "next/link";
import ExitButton from "../components/ExitButton";

export default function Payment() {

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6">Fyll i dina uppgifter</a>
      <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">
          <div className="grid grid-cols-1">
            <input
              className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Kortinnehavare"
              type="text"
            ></input>
            <input
              className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Kortnummer"
              type="text"
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <input
              className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Giltigt till MM"
              type="text"
            ></input>
            <input
              className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
              placeholder="Giltigt till ÅÅ"
              type="text"
            ></input>
          </div>
          <input
            className=" h-4 mt-4 border ml-2 mr-2 bg-white text-center 
          drop-shadow-md shadow-black text-black rounded text-sm"
            placeholder="Säkerhetskod"
            type="text"
          ></input>
          <div className="text-lg mt-3">Summa totalt: 300 SEK</div>
        </div>
      </div>
      <div className="ml-24 m-5 ">
        <BackButton />
        <Link href="/ticket-information">
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10 bg-gray-400">
            Betala
          </a>
        </Link>
      </div>
    </div>
  );
}
