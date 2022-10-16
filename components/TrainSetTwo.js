import React, { useState } from "react";
import Image from "next/image";
import FirstClassCoach from "./FirstClassCoach";
import SecondClassCoach from "./SecondClassCoach";
import BistroCoach from "./BistroCoach";
import TrailerCoach from "./TrailerCoach";

export default function TrainSetTwo({ trainSetModelTwo, chosenTrainCoaches }) {
  const cssFree =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  const cssSpecialNeeds =
    "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded";
  const cssSelected =
    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";

  const [trainSetTwo, setTrainSetTwo] = useState(trainSetModelTwo);

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
    let trainArray = JSON.parse(JSON.stringify(trainSetTwo));
    if (trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected) {
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected = false;
      if (trainArray[chosenCoachIndex].coachSeats[seatId - 1].specialNeeds) {
        trainArray[chosenCoachIndex].coachSeats[seatId - 1].className =
          cssSpecialNeeds;
      } else
        trainArray[chosenCoachIndex].coachSeats[seatId - 1].className = cssFree;
      setTrainSetTwo(trainArray);
    } else if (
      !trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected
    ) {
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected = true;
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].className =
        cssSelected;
      setTrainSetTwo(trainArray);
    }
  }

  if (chosenCoachIndex == 0) {
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
          <FirstClassCoach
            coachToRender={trainSetTwo[0]}
            handleClickSeat={handleClickSeat}
          ></FirstClassCoach>
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
            coachToRender={trainSetTwo[1]}
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
            coachToRender={trainSetTwo[2]}
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
            coachToRender={trainSetTwo[3]}
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
          <TrailerCoach
            coachToRender={trainSetTwo[4]}
            handleClickSeat={handleClickSeat}
          ></TrailerCoach>
        </div>
      </div>
    );
  } 
}
