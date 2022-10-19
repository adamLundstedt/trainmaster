import Link from "next/link";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    //tar dig tillbaka till föregående sida
    /*  <Link href="javascript: history.back()">
      <a className="text-white px-4 py-0.5 rounded-md mt-10 bg-gray-400">
        
      </a>
    </Link> */
    <button
      type="button"
      onClick={() => router.back()}
      className="text-white px-4 py-0.5 rounded-md mt-10 bg-gray-400"
    >
      Tillbaka
    </button>
  );
}
