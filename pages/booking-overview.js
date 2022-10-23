import BackButton from "../components/BackButton";
import Link from "next/link";
import ExitButton from "../components/ExitButton";
import QrCode from "../components/QrCode"; // <QrCode text={tickets} />

export default function BookingOverview() {

  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-32 mb-6">Bokningsöversikt  </a>
      <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
        <div className=" text-center text-white pt-[10px] text-[10px] ">


        </div>
      </div>

      <div className="ml-16 m-5 ">
        <BackButton />
        <Link href="/payment">
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10
           bg-gray-400">
            Boka & Betala
          </a>
        </Link>
      </div>
    </div>

  );
}
