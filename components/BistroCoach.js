import BackButton from "../components/BackButton";
import Link from "next/link";
import ExitButton from "../components/ExitButton";

export default function BistroCoach({ coachToRender, handleClickSeat }) {
  return (
    <div className=" w-full pt-[50px] ">
      <ExitButton />
      <a className="text-white text-lg ml-36 mb-6">Välj sittplats </a>
      <div className=" ml-5 mr-5">
        <div className="text-center ml-16 text-white pt-[10px] text-[10px] ">
          <div id='slider' className="w-[200px]  bg-white bg-opacity-60 overflow-y-scroll scroll whitespace-nowrap scroll-smooth pb-10 h-[250px]">
            <div className="inline-grid grid-cols-4">

              <div className="m-2" key={coachToRender.coachSeats[0].id}>
                <button
                  disabled={coachToRender.coachSeats[0].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[0].id)
                  }
                  className={coachToRender.coachSeats[0].className}
                >
                  {coachToRender.coachSeats[0].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[1].id}>
                <button
                  disabled={coachToRender.coachSeats[1].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[1].id)
                  }
                  className={coachToRender.coachSeats[1].className}
                >
                  {coachToRender.coachSeats[1].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[2].id}>
                <button
                  disabled={coachToRender.coachSeats[2].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[2].id)
                  }
                  className={coachToRender.coachSeats[2].className}
                >
                  {coachToRender.coachSeats[2].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[3].id}>
                <button
                  disabled={coachToRender.coachSeats[3].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[3].id)
                  }
                  className={coachToRender.coachSeats[3].className}
                >
                  {coachToRender.coachSeats[3].seatNumber}
                </button>
              </div>

              <div className="m-2" key={coachToRender.coachSeats[4].id}>
                <button
                  disabled={coachToRender.coachSeats[4].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[4].id)
                  }
                  className={coachToRender.coachSeats[4].className}
                >
                  {coachToRender.coachSeats[4].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[5].id}>
                <button
                  disabled={coachToRender.coachSeats[5].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[5].id)
                  }
                  className={coachToRender.coachSeats[5].className}
                >
                  {coachToRender.coachSeats[5].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[6].id}>
                <button
                  disabled={coachToRender.coachSeats[6].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[6].id)
                  }
                  className={coachToRender.coachSeats[6].className}
                >
                  {coachToRender.coachSeats[6].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[7].id}>
                <button
                  disabled={coachToRender.coachSeats[7].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[7].id)
                  }
                  className={coachToRender.coachSeats[7].className}
                >
                  {coachToRender.coachSeats[7].seatNumber}
                </button>
              </div>

              <div className="m-2" key={coachToRender.coachSeats[8].id}>
                <button
                  disabled={coachToRender.coachSeats[8].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[8].id)
                  }
                  className={coachToRender.coachSeats[8].className}
                >
                  {coachToRender.coachSeats[8].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[9].id}>
                <button
                  disabled={coachToRender.coachSeats[9].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[9].id)
                  }
                  className={coachToRender.coachSeats[9].className}
                >
                  {coachToRender.coachSeats[9].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[10].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[10].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[10].id)
                  }
                  className={coachToRender.coachSeats[10].className}
                >
                  {coachToRender.coachSeats[10].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[11].id}>
                <button
                  disabled={coachToRender.coachSeats[9].isBooked ? true : false}
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[11].id)
                  }
                  className={coachToRender.coachSeats[11].className}
                >
                  {coachToRender.coachSeats[11].seatNumber}
                </button>
              </div>

              <div className="m-2" key={coachToRender.coachSeats[12].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[12].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[12].id)
                  }
                  className={coachToRender.coachSeats[12].className}
                >
                  {coachToRender.coachSeats[12].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[13].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[13].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[13].id)
                  }
                  className={coachToRender.coachSeats[13].className}
                >
                  {coachToRender.coachSeats[13].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[14].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[14].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[14].id)
                  }
                  className={coachToRender.coachSeats[14].className}
                >
                  {coachToRender.coachSeats[14].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[15].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[15].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[15].id)
                  }
                  className={coachToRender.coachSeats[15].className}
                >
                  {coachToRender.coachSeats[15].seatNumber}
                </button>
              </div>

              <div className="m-2" key={coachToRender.coachSeats[16].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[16].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[16].id)
                  }
                  className={coachToRender.coachSeats[16].className}
                >
                  {coachToRender.coachSeats[16].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[17].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[17].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[17].id)
                  }
                  className={coachToRender.coachSeats[17].className}
                >
                  {coachToRender.coachSeats[17].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[18].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[18].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[18].id)
                  }
                  className={coachToRender.coachSeats[18].className}
                >
                  {coachToRender.coachSeats[18].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[19].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[19].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[19].id)
                  }
                  className={coachToRender.coachSeats[19].className}
                >
                  {coachToRender.coachSeats[19].seatNumber}
                </button>
              </div>

              <div className="m-2" key={coachToRender.coachSeats[20].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[20].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[20].id)
                  }
                  className={coachToRender.coachSeats[20].className}
                >
                  {coachToRender.coachSeats[20].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[21].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[21].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[21].id)
                  }
                  className={coachToRender.coachSeats[21].className}
                >
                  {coachToRender.coachSeats[21].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[22].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[22].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[22].id)
                  }
                  className={coachToRender.coachSeats[22].className}
                >
                  {coachToRender.coachSeats[22].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[23].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[23].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[23].id)
                  }
                  className={coachToRender.coachSeats[23].className}
                >
                  {coachToRender.coachSeats[23].seatNumber}
                </button>
              </div>

              <div className="m-2" key={coachToRender.coachSeats[24].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[24].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[24].id)
                  }
                  className={coachToRender.coachSeats[24].className}
                >
                  {coachToRender.coachSeats[24].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[25].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[25].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[25].id)
                  }
                  className={coachToRender.coachSeats[25].className}
                >
                  {coachToRender.coachSeats[25].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[26].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[26].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[26].id)
                  }
                  className={coachToRender.coachSeats[26].className}
                >
                  {coachToRender.coachSeats[26].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[27].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[27].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[27].id)
                  }
                  className={coachToRender.coachSeats[27].className}
                >
                  {coachToRender.coachSeats[27].seatNumber}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="text-white ml-24 w-[150px]">
        <a className="text-center">Typ av säten:</a>
        <div className="grid grid-cols-2">
          <div className=" bg-yellow-500 ml-14  hover:bg-yellow-700  w-4 h-4 rounded" />
          Rullstolsanpassad</div>

        <div className="grid grid-cols-2">
          <div className="bg-green-500 ml-14  hover:bg-green-700  w-4 h-4 rounded" />
          Vald stol</div>
        <div className="grid grid-cols-2">

          <div className="bg-gray-400 ml-14  hover:bg-gray-800 w-4 h-4 rounded" />
          Ledig stol
        </div>

      </div>

      <div className="ml-24 m-5 ">
        <BackButton />
        <Link href="/booking-information">
          <a className="text-white ml-5 px-4 py-0.5 rounded-md mt-10
           bg-gray-400">
            Nästa
          </a>
        </Link>
      </div>
    </div>
  );
}
