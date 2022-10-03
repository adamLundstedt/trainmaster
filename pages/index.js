import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <div className="pt-[10px]">
        <div className="text-white font-bold text-[25px] m-20 md:text-[80px] ">Vart vill du resa?</div>
        <div className="w-[200px] ml-20 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
          <Link href="/search-trip">Sök resa</Link>
        </div>
      </div>
    </div>
  )
};
