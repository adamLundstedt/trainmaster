import Link from "next/link";
import { useState } from 'react'


export default function MobileNavbar() {
  const [dropdownOpen, setdropdownOpen] = useState(false);


  return (
    <nav className="bg-white z-50 top-0 flex drop-shadow-md shadow-black">
      <div className="grid grid-cols-3 w-full">
        <div className="mx-3 mt-2 drop-shadow-md shadow-black text-2xl font-bold text-slate-500">
          TM
        </div>
        <div className="m-2.5 border bg-gray-400 text-center 
        drop-shadow-md shadow-black text-white rounded text-sm">
          Sök bokning
        </div>
        <button onClick={() => setdropdownOpen(!dropdownOpen)} className="m-3 ml-24 justify-end items-end"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>

      </div>
    </nav>
  );
}
