import React, { useState, useEffect } from "react";
import { useAppContext } from "../my-app/context/AppContext";

import FirstClassCoach from "./FirstClassCoach";
import SecondClassCoach from "./SecondClassCoach";
import BistroCoach from "./BistroCoach";
import TrailerCoach from "./TrailerCoach";

export default function TrainSetThree({ trainSetModelThree, chosenTrainCoaches }) {
  const cssFree =
    "bg-gray-400 hover:bg-gray-800 text-white font-bold text-[11px] w-8 h-8 rounded";
  const cssSpecialNeeds =
    "bg-yellow-500 hover:bg-yellow-700 text-white font-bold text-[11px] w-8 h-8 rounded";
  const cssSelected =
    "bg-green-500 hover:bg-green-700 text-white font-bold text-[11px] w-8 h-8 rounded";

  const [appState, setAppState] = useAppContext();
  const [trainSetThree, setTrainSetThree] = useState(trainSetModelThree);

  const [chosenCoachIndex, setChosenCoachIndex] = useState(0);

  const [trainId, setTrainId] = useState(appState.booking.chosenTrainId);

  const [chosenSeats, setChosenSeats] = useState([]);


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
    function removeObjectWithId(arr, id) {
      const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
      arr.splice(objWithIdIndex, 1);

      return arr;
    }
    let trainArray = JSON.parse(JSON.stringify(trainSetThree));
    if (trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected) {
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected = false;
      if (trainArray[chosenCoachIndex].coachSeats[seatId - 1].specialNeeds) {
        trainArray[chosenCoachIndex].coachSeats[seatId - 1].className =
          cssSpecialNeeds;
          let chosenSeatsCopy = JSON.parse(JSON.stringify(chosenSeats));
        
          setChosenSeats(removeObjectWithId(chosenSeatsCopy, seatId));
      } else
        trainArray[chosenCoachIndex].coachSeats[seatId - 1].className = cssFree;
        let chosenSeatsCopy = JSON.parse(JSON.stringify(chosenSeats));
        setChosenSeats(removeObjectWithId(chosenSeatsCopy, seatId));
      setTrainSetThree(trainArray);
    } else if (
      !trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected
    ) {
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].isSelected = true;
      trainArray[chosenCoachIndex].coachSeats[seatId - 1].className =
        cssSelected;

        let chosenSeatsCopy = JSON.parse(JSON.stringify(chosenSeats));
        chosenSeatsCopy.push({
          id: seatId,
          trainId: trainId,
          coach: chosenCoachIndex + 1,
          seat: seatId,
          names: [],
        });
        
        setChosenSeats(chosenSeatsCopy); 
      setTrainSetThree(trainArray);
    }
  }

  useEffect(() => {
    let appStateCopy = JSON.parse(JSON.stringify(appState));
    appStateCopy.booking.chosenSeats = chosenSeats;
    setAppState(appStateCopy);

  },[chosenSeats])

  console.log(chosenSeats);
  console.log(appState);


  if (chosenCoachIndex == 0) {
    return (
      <div>
        <div>
          <p className="text-white text-center">Vagnnummer: {chosenCoachIndex + 1}</p>
          <div>
            <button
              className="text-white px-3 mx-5 ml-12 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickLeftArrow()} >
              Föregående vagn
            </button>
            <button
              className="text-white px-3 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickRightArrow()} >
              Nästa vagn
            </button>
          </div>
          <FirstClassCoach
            coachToRender={trainSetThree[0]}
            handleClickSeat={handleClickSeat}
          ></FirstClassCoach>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 1) {
    return (
      <div>
        <div>
          <p className="text-white text-center">Vagnnummer: {chosenCoachIndex + 1}</p>

          <div>
            <button
              className="text-white px-3 mx-5 ml-12 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickLeftArrow()} >
              Föregående vagn
            </button>
            <button
              className="text-white px-3 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickRightArrow()} >
              Nästa vagn
            </button>
          </div>
          <SecondClassCoach
            coachToRender={trainSetThree[1]}
            handleClickSeat={handleClickSeat}
          ></SecondClassCoach>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 2) {
    return (
      <div>
        <div>
          <p className="text-white text-center">Vagnnummer: {chosenCoachIndex + 1}</p>

          <div>
            <button
              className="text-white px-3 mx-5 ml-12 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickLeftArrow()} >
              Föregående vagn
            </button>
            <button
              className="text-white px-3 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickRightArrow()} >
              Nästa vagn
            </button>
          </div>
          <SecondClassCoach
            coachToRender={trainSetThree[2]}
            handleClickSeat={handleClickSeat}
          ></SecondClassCoach>
        </div>
      </div>
    );
  } else if (chosenCoachIndex == 3) {
    return (
      <div>
        <div>
          <p className="text-white text-center">Vagnnummer: {chosenCoachIndex + 1}</p>

          <div>
            <button
              className="text-white px-3 mx-5 ml-12 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickLeftArrow()} >
              Föregående vagn
            </button>
            <button
              className="text-white px-3 rounded-md mt-2 bg-gray-400"
              onClick={() => handleClickRightArrow()} >
              Nästa vagn
            </button>
          </div>
          <TrailerCoach
            coachToRender={trainSetThree[3]}
            handleClickSeat={handleClickSeat}
          ></TrailerCoach>
        </div>
      </div>
    );
  }
}
