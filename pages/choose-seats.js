
import { useState, useEffect } from "react";
import { useAppContext } from "../my-app/context/AppContext";

import TrainSetOne from "../components/TrainSetOne";
import TrainSetTwo from "../components/TrainSetTwo";
import TrainSetThree from "../components/TrainSetThree";

export default function ChooseSeats() {
  
  const [appState, setAppState] = useAppContext();
  const [data, setData] = useState(appState);
  const [trains, setTrains] = useState(data.trainsST);
  const [tickets, setTickets] = useState(data.ticketsST);
  const [coaches, setCoaches] = useState(data.coachesST);
  const [chosenTrainId, setChosenTrainId] = useState(data.booking.chosenTrainId); 
  

  const cssFree =
    "bg-gray-400 hover:bg-gray-800 text-white font-bold text-[11px] w-8 h-8 rounded";
  const cssBooked =
    "bg-red-500 hover:bg-red-500 text-white font-bold text-[11px] w-8 h-8 rounded";
  const cssSpecialNeeds =
    "bg-yellow-500 hover:bg-yellow-700 text-white font-bold text-[11px] w-8 h-8 rounded";
  const cssSelected =
    "bg-green-500 hover:bg-green-700 text-white font-bold text-[11px] w-8 h-8 rounded";

  let className;

  let firstClassCoachModel = [];
  let secondClassCoachModel = [];
  let bistroCoachModel = [];
  let trailerCoachModel = [];

  for (let i = 1; i < 55; i++) {
    let isSpecial = false;
    className = cssFree;
    if (i == 46 || i == 49 || i == 52) {
      isSpecial = true;
      className = cssSpecialNeeds;
    }
    firstClassCoachModel.push({
      id: i,
      seatNumber: i,
      specialNeeds: isSpecial,
      isSelected: false,
      isBooked: false,
      className: className,
    });
  }

  for (let i = 1; i < 75; i++) {
    let isSpecial = false;
    let className = cssFree;
    if (i == 3 || i == 4 || i == 71 || i == 72) {
      isSpecial = true;
      className = cssSpecialNeeds;
    }
    secondClassCoachModel.push({
      id: i,
      seatNumber: i,
      specialNeeds: isSpecial,
      isSelected: false,
      isBooked: false,
      className: className,
    });
  }

  for (let i = 1; i < 29; i++) {
    let isSpecial = false;
    let className = cssFree;
    if (i == 3 || i == 4) {
      isSpecial = true;
      className = cssSpecialNeeds;
    }
    bistroCoachModel.push({
      id: i,
      seatNumber: i,
      specialNeeds: isSpecial,
      isSelected: false,
      isBooked: false,
      className: className,
    });
  }

  for (let i = 1; i < 41; i++) {
    let className = cssFree;
    trailerCoachModel.push({
      id: i,
      seatNumber: i,
      specialNeeds: false,
      isSelected: false,
      isBooked: false,
      className: className,
    });
  }

  trailerCoachModel.push({
    id: 41,
    seatNumber: 79,
    specialNeeds: true,
    isSelected: false,
    isBooked: false,
    className: cssSpecialNeeds,
  });
  trailerCoachModel.push({
    id: 42,
    seatNumber: 80,
    specialNeeds: true,
    isSelected: false,
    isBooked: false,
    className: cssSpecialNeeds,
  });

  let chosenTrain;

  for (let train of trains) {
    if (train._id == chosenTrainId) {
      chosenTrain = train;
    }
  }

  let ticketsForGivenTrain = [];

  for (let ticket of tickets) {
    if (ticket.trainId == chosenTrainId) {
      ticketsForGivenTrain.push(ticket);
    }
  }

  let chosenTrainCoaches = [];

  for (let chosenTrainCoach of chosenTrain.coaches) {
    for (let coach of coaches) {
      if (coach._id == chosenTrainCoach.coachId) {
        chosenTrainCoaches.push(coach);
      }
    }
  }

  let trainSetModelOne = [];
  let trainSetModelTwo = [];
  let trainSetModelThree = [];

  let modelOne = false;
  let modelTwo = false;
  let modelThree = false;

  if ((chosenTrainCoaches.length == 6)) {
    modelOne = true;
    for (let i = 0; i < chosenTrainCoaches.length; i++) {
      let coachId = chosenTrainCoaches[i]._id;
      if (i == 0) {
        trainSetModelOne.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(firstClassCoachModel)),
        });
      } else if (i == 1) {
        trainSetModelOne.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(secondClassCoachModel)),
        });
      } else if (i == 2) {
        trainSetModelOne.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(bistroCoachModel)),
        });
      } else if (i == 3) {
        trainSetModelOne.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(secondClassCoachModel)),
        });
      } else if (i == 4) {
        trainSetModelOne.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(secondClassCoachModel)),
        });
      } else if (i == 5) {
        trainSetModelOne.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(trailerCoachModel)),
        });
      }
    }
  } else if ((chosenTrainCoaches.length == 5)) {
    modelTwo = true;

    for (let i = 0; i < chosenTrainCoaches.length; i++) {
      let coachId = chosenTrainCoaches[i]._id;
      if (i == 0) {
        trainSetModelTwo.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(firstClassCoachModel)),
        });
      } else if (i == 1) {
        trainSetModelTwo.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(secondClassCoachModel)),
        });
      } else if (i == 2) {
        trainSetModelTwo.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(bistroCoachModel)),
        });
      } else if (i == 3) {
        trainSetModelTwo.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(secondClassCoachModel)),
        });
      } else if (i == 4) {
        trainSetModelTwo.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(trailerCoachModel)),
        });
      }
    }
  } else if ((chosenTrainCoaches.length == 4)) {
    modelThree = true;

    for (let i = 0; i < chosenTrainCoaches.length; i++) {
      let coachId = chosenTrainCoaches[i]._id;
      if (i == 0) {
        trainSetModelThree.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(firstClassCoachModel)),
        });
      } else if (i == 1) {
        trainSetModelThree.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(secondClassCoachModel)),
        });
      } else if (i == 2) {
        trainSetModelThree.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(secondClassCoachModel)),
        });
      } else if (i == 3) {
        trainSetModelThree.push({
          coachId: coachId,
          coachSeats: JSON.parse(JSON.stringify(trailerCoachModel)),
        });
      }
    }
  }


  for (let ticket of ticketsForGivenTrain) {
    if (modelOne) {
      for (let coach of trainSetModelOne) {
        if (ticket.coach == coach.coachId) {
          for (let seat of coach.coachSeats) {
            if (seat.seatNumber == ticket.seatNumber) {
              seat.isBooked = true;
              seat.className = cssBooked;
            }
          }
        }
      }
    } else if (modelTwo) {
      for (let coach of trainSetModelTwo) {
        if (ticket.coach == coach.coachId) {
          for (let seat of coach.coachSeats) {
            if (seat.seatNumber == ticket.seatNumber) {
              seat.isBooked = true;
              seat.className = cssBooked;
            }
          }
        }
      }
    } else if (modelThree) {
      for (let coach of trainSetModelThree) {
        if (ticket.coach == coach.coachId) {
          for (let seat of coach.coachSeats) {
            if (seat.seatNumber == ticket.seatNumber) {
              seat.isBooked = true;
              seat.className = cssBooked;
            }
          }
        }
      }
    }
  }

  if (modelOne) {
    return <TrainSetOne trainSetModelOne={trainSetModelOne} chosenTrainCoaches={chosenTrainCoaches}></TrainSetOne>;
  }

  else if (modelTwo) {
    return <TrainSetTwo trainSetModelTwo={trainSetModelTwo} chosenTrainCoaches={chosenTrainCoaches}></TrainSetTwo>;
  }

  else if (modelThree) {
    return <TrainSetThree trainSetModelThree={trainSetModelThree} chosenTrainCoaches={chosenTrainCoaches}></TrainSetThree>;
  }
}


