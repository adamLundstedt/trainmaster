import React, { useState } from "react";
import Image from "next/image";
import FirstClassCoach from "./FirstClassCoach";
import SecondClassCoach from "./SecondClassCoach";
import BistroCoach from "./BistroCoach";
import TrailerCoach from "./TrailerCoach";

export default function TrainSetOne({ trainSetModelOne, chosenTrainCoaches }) {
  const cssFree =
    "bg-gray-400 hover:bg-gray-800 text-white font-bold text-[11px] w-8 h-8 rounded";
  const cssSpecialNeeds =
    "bg-yellow-500 hover:bg-yellow-700 text-white font-bold text-[11px] w-8 h-8 rounded";
  const cssSelected =
    "bg-green-500 hover:bg-green-700 text-white font-bold text-[11px] w-8 h-8 rounded";

  const [trainSetOne, setTrainSetOne] = useState(trainSetModelOne);

  const [chosenCoachIndex, setChosenCoachIndex] = useState(0);

  function handleClickLeftArrow() {
    let indexValue = chosenCoachIndex;
    if (indexValue > 0) {
      indexValue--;
      setChosenCoachIndex(indexValue);
    }
  }

  function handleClickRightArrow() {
    let indexValue = chosenCoachIndex;
    if (indexValue < chosenTrainCoaches.length - 1) {
      indexValue++;
      setChosenCoachIndex(indexValue);
    }
  }

  function handleClickSeat(seatId) {
    let trainArray = JSON.parse(JSON.stringify(trainSetOne));
    if (trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected) {
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected = false;
      if (trainArray[chosenCoachIndex].coachSeats[seatId - 1].specialNeeds) {
        trainArray[chosenCoachIndex].coachSeats[seatId - 1].className =
          cssSpecialNeeds;
      } else
        trainArray[chosenCoachIndex].coachSeats[seatId - 1].className = cssFree;
      setTrainSetOne(trainArray);
    } else if (
      !trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected
    ) {
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected = true;
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].className =
        cssSelected;
      setTrainSetOne(trainArray);
    }
  }

  if (chosenCoachIndex == 0) {
    return (
      <div>
        <div>
          <p className="text-white">Vagnnummer: {chosenCoachIndex + 1}</p>
          <div><FirstClassCoach
            coachToRender={trainSetOne[0]}
            handleClickSeat={handleClickSeat}
          ></FirstClassCoach>
            <button onClick={() => handleClickLeftArrow()} className="m-2">
              <Image src="/arrow-left.png" height="100px" width="100px"></Image>
            </button>
            <button onClick={() => handleClickRightArrow()} className="m-2">
              <Image
                src="/arrow-right.png"
                height="100px"
                width="100px"
              ></Image>
            </button>
          </div>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 1) {
    return (
      <div>
        <div>
          <div>
            <button onClick={() => handleClickLeftArrow()} className="m-2">
              <Image src="/arrow-left.png" height="100px" width="100px"></Image>
            </button>
            <button onClick={() => handleClickRightArrow()} className="m-2">
              <Image
                src="/arrow-right.png"
                height="100px"
                width="100px"
              ></Image>
            </button>
            <p className="text-white">VAGNNUMMER: {chosenCoachIndex + 1}</p>
          </div>
          <SecondClassCoach
            coachToRender={trainSetOne[1]}
            handleClickSeat={handleClickSeat}
          ></SecondClassCoach>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 2) {
    return (
      <div>
        <div>
          <div>
            <button onClick={() => handleClickLeftArrow()} className="m-2">
              <Image src="/arrow-left.png" height="100px" width="100px"></Image>
            </button>
            <button onClick={() => handleClickRightArrow()} className="m-2">
              <Image
                src="/arrow-right.png"
                height="100px"
                width="100px"
              ></Image>
            </button>
            <p className="text-white">VAGNNUMMER: {chosenCoachIndex + 1}</p>
          </div>
          <BistroCoach
            coachToRender={trainSetOne[2]}
            handleClickSeat={handleClickSeat}
          ></BistroCoach>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 3) {
    return (
      <div>
        <div>
          <div>
            <button onClick={() => handleClickLeftArrow()} className="m-2">
              <Image src="/arrow-left.png" height="100px" width="100px"></Image>
            </button>
            <button onClick={() => handleClickRightArrow()} className="m-2">
              <Image
                src="/arrow-right.png"
                height="100px"
                width="100px"
              ></Image>
            </button>
            <p className="text-white">VAGNNUMMER: {chosenCoachIndex + 1}</p>
          </div>
          <SecondClassCoach
            coachToRender={trainSetOne[3]}
            handleClickSeat={handleClickSeat}
          ></SecondClassCoach>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 4) {
    return (
      <div>
        <div>
          <div>
            <button onClick={() => handleClickLeftArrow()} className="m-2">
              <Image src="/arrow-left.png" height="100px" width="100px"></Image>
            </button>
            <button onClick={() => handleClickRightArrow()} className="m-2">
              <Image
                src="/arrow-right.png"
                height="100px"
                width="100px"
              ></Image>
            </button>
            <p className="text-white">VAGNNUMMER: {chosenCoachIndex + 1}</p>
          </div>
          <SecondClassCoach
            coachToRender={trainSetOne[4]}
            handleClickSeat={handleClickSeat}
          ></SecondClassCoach>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 5) {
    return (
      <div>
        <div>
          <div>
            <button onClick={() => handleClickLeftArrow()} className="m-2">
              <Image src="/arrow-left.png" height="100px" width="100px"></Image>
            </button>
            <button onClick={() => handleClickRightArrow()} className="m-2">
              <Image
                src="/arrow-right.png"
                height="100px"
                width="100px"
              ></Image>
            </button>
            <p className="text-white">VAGNNUMMER: {chosenCoachIndex + 1}</p>
          </div>
          <TrailerCoach
            coachToRender={trainSetOne[5]}
            handleClickSeat={handleClickSeat}
          ></TrailerCoach>
        </div>
      </div>
    );
  }
}
