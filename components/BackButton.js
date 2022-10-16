import Link from "next/link";


export default function BackButton() {
  return (
    //tar dig tillbaka till föregående sida
    <Link href="javascript: history.back()">
      <a className="text-white px-4 py-0.5 rounded-md mt-10 bg-gray-400">
        Tillbaka
      </a>
    </Link>)
}