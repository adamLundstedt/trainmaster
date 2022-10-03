
export default function Home() {
  return (
    <div className="h-full ">
      <div className="pt-[100px] pb-[450px] bg-[url('/background.jpeg')] bg-cover bg-center  bg-no-repeat">
        <a className="text-white font-bold text-[25px] m-20 md:text-[80px] ">Vart vill du resa?</a>
        <Link href="/searchTrip">
        <div className="w-[200px] ml-20 bg-gray-400 cursor-pointer text-center drop-shadow-md shadow-black text-white rounded text-sm">
          Sök resa
        </div></Link>
      </div>
    </div>
  )
}
