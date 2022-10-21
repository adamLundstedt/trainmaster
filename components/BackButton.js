import Link from "next/link";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-white px-3 rounded-md mt-10 bg-gray-400"
    >
      Tillbaka
    </button>
  );
}
