export default function TrailerCoach({ coachToRender, handleClickSeat }) {
  return (
    <div>
      <div className="bg-[url('/trailerlayout.jpg')] bg-contain bg-scroll bg-no-repeat ml-10 mr-10 mt-10">
        <div className="ml-10 mr-10 inline-grid grid-cols-1 pt-1 pb-12">
          <div className="inline-grid grid-cols-12">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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

            <div>
              <div className="m-2" key={coachToRender.coachSeats[28].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[28].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[28].id)
                  }
                  className={coachToRender.coachSeats[28].className}
                >
                  {coachToRender.coachSeats[28].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[29].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[29].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[29].id)
                  }
                  className={coachToRender.coachSeats[29].className}
                >
                  {coachToRender.coachSeats[29].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[30].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[30].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[30].id)
                  }
                  className={coachToRender.coachSeats[30].className}
                >
                  {coachToRender.coachSeats[30].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[31].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[31].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[31].id)
                  }
                  className={coachToRender.coachSeats[31].className}
                >
                  {coachToRender.coachSeats[31].seatNumber}
                </button>
              </div>
            </div>

            <div>
              <div className="m-2" key={coachToRender.coachSeats[32].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[32].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[32].id)
                  }
                  className={coachToRender.coachSeats[32].className}
                >
                  {coachToRender.coachSeats[32].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[33].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[33].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[33].id)
                  }
                  className={coachToRender.coachSeats[33].className}
                >
                  {coachToRender.coachSeats[33].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[34].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[34].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[34].id)
                  }
                  className={coachToRender.coachSeats[34].className}
                >
                  {coachToRender.coachSeats[34].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[35].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[35].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[35].id)
                  }
                  className={coachToRender.coachSeats[35].className}
                >
                  {coachToRender.coachSeats[35].seatNumber}
                </button>
              </div>
            </div>

            <div>
              <div className="m-2" key={coachToRender.coachSeats[36].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[36].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[36].id)
                  }
                  className={coachToRender.coachSeats[36].className}
                >
                  {coachToRender.coachSeats[36].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[37].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[37].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[37].id)
                  }
                  className={coachToRender.coachSeats[37].className}
                >
                  {coachToRender.coachSeats[37].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[38].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[38].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[38].id)
                  }
                  className={coachToRender.coachSeats[38].className}
                >
                  {coachToRender.coachSeats[38].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[39].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[39].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[39].id)
                  }
                  className={coachToRender.coachSeats[39].className}
                >
                  {coachToRender.coachSeats[39].seatNumber}
                </button>
              </div>
            </div>
            <div>
              <div className="m-2" key={coachToRender.coachSeats[40].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[40].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[40].id)
                  }
                  className={coachToRender.coachSeats[40].className}
                >
                  {coachToRender.coachSeats[40].seatNumber}
                </button>
              </div>
              <div className="m-2" key={coachToRender.coachSeats[41].id}>
                <button
                  disabled={
                    coachToRender.coachSeats[41].isBooked ? true : false
                  }
                  onClick={() =>
                    handleClickSeat(coachToRender.coachSeats[41].id)
                  }
                  className={coachToRender.coachSeats[41].className}
                >
                  {coachToRender.coachSeats[41].seatNumber}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
