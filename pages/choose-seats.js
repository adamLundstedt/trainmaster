import { connectToDatabase } from "../lib/mongodb";
import React, { useState} from 'react';


export default function ChooseSeats({trains, tickets, coaches}) {

  const chosenTrainId = '632ac4233b9bdbfc822b4d13';

  const cssFree = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const cssBooked = "bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded";
  const cssSpecialNeeds = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded";
  const cssSelected = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
  
  let className;

  let firstClassCoachModel = [];
  let secondClassCoachModel = [];
  let bistroCoachModel = [];
  let trailerCoachModel = [];

  for(let i = 1; i < 55; i++) {
    let isSpecial = false;
    className = cssFree;
    if(i == 46 || i == 49 || i == 52 ) {
      isSpecial = true
      className = cssSpecialNeeds;
    }
    firstClassCoachModel.push({id: i, seatNumber: i, specialNeeds: isSpecial, isSelected: false, isBooked: false, className: className})    
  }

  for(let i = 1; i < 75; i++) {
    let isSpecial = false;
    let className = cssFree;
    if(i == 3 || i == 4 || i == 71 || i == 72) {
      isSpecial = true
      className = cssSpecialNeeds;
    }
    secondClassCoachModel.push({id: i, seatNumber: i, specialNeeds: isSpecial, isSelected: false, isBooked: false, className: className})
  }

  for(let i = 1; i < 29; i++) {
    let isSpecial = false;
    let className = cssFree;
    if(i == 3 || i == 4) {
      isSpecial = true
      className = cssSpecialNeeds;
    }
    bistroCoachModel.push({id: i, seatNumber: i, specialNeeds: isSpecial, isSelected: false, isBooked: false, className: className})
  }

  for(let i = 1; i < 41; i++) {
    let className = cssFree;  
    trailerCoachModel.push({id: i, seatNumber: i, specialNeeds: false, isSelected: false, isBooked: false, className: className})
  }
   
  trailerCoachModel.push({
    id: 41, 
    seatNumber: 79, 
    specialNeeds: true, 
    isSelected: false, 
    isBooked: false, 
    className: cssSpecialNeeds})
  trailerCoachModel.push({
    id: 42, 
    seatNumber: 80, 
    specialNeeds: true, 
    isSelected: false, 
    isBooked: false, 
    className: cssSpecialNeeds})
  

  

  let chosenTrain;
    
  for(let train of trains ) {
    if(train._id == chosenTrainId) {
            chosenTrain = train;
      }
    }

  let ticketsForGivenTrain = [];
    
  for (let ticket of tickets) {
    if(ticket.trainId == chosenTrainId) {
      ticketsForGivenTrain.push(ticket);
    }
  }

  let chosenTrainCoaches = [];

  for (let chosenTrainCoach of chosenTrain.coaches) {
    for(let coach of coaches) {
      if(coach._id == chosenTrainCoach.coachId) {
        chosenTrainCoaches.push(coach);
      }
    }
  }  
  
  

  for(let ticket of ticketsForGivenTrain) {
    for(let coach of chosenTrainCoaches) {
      if(ticket.coach == coach._id){
        if(coach.category == "1CLASS") {          
          for (let coachSeats of firstClassCoachModel) {
            if(coachSeats.seatNumber == ticket.seatNumber) {
              coachSeats.isBooked = true;
              coachSeats.className = cssBooked;
            }
          }
        }
        else if(coach.category == "2CLASS") {          
          for (let coachSeats of secondClassCoachModel) {
            if(coachSeats.seatNumber == ticket.seatNumber) {
              coachSeats.isBooked = true;
              coachSeats.className = cssBooked;
            }
          }
        }
        else if(coach.category == "BISTRO") {          
          for (let coachSeats of bistroCoachModel) {
            if(coachSeats.seatNumber == ticket.seatNumber) {
              coachSeats.isBooked = true;
              coachSeats.className = cssBooked;
            }
          }
        }
        else if(coach.category == "TRAILER") {          
          for (let coachSeats of trailerCoachModel) {
            if(coachSeats.seatNumber == ticket.seatNumber) {
              coachSeats.isBooked = true;
              coachSeats.className = cssBooked;
            }
          }
        }
      }
    }
  }

  

 
  
  const [firstClassCoach, setFirstClassCoach] = useState(firstClassCoachModel);
  const [secondClassCoach, setSecondClassCoach] = useState(secondClassCoachModel);
  const [bistroCoach, setBistroCoach] = useState(bistroCoachModel);
  const [trailerCoach, setTrailerCoach] = useState(trailerCoachModel);
  
  const [chosenCoachIndex, setChosenCoachIndex] = useState(0);

  let coachToDisplay = chosenTrainCoaches[chosenCoachIndex];
  let coachModel = secondClassCoachModel;
  

  console.log("trains: ",trains);
  console.log("tickets: ", tickets);
  console.log("coaches: ", coaches);    
  console.log("chosen train: ", chosenTrain);
  console.log("chosen train coaches: ", chosenTrainCoaches)
  console.log("tickets for given train: ", ticketsForGivenTrain); 
  console.log("firstClassCoachModel: ", firstClassCoachModel);  
  console.log("firstClassCoach: ", firstClassCoach);
  
  
  function handleClickFirstClass(seatNumber) {
    let trainArray = firstClassCoach;
    if (trainArray[seatNumber - 1].isSelected) {
      trainArray[seatNumber - 1].isSelected = false;
      trainArray[seatNumber - 1].className = cssFree;
      setFirstClassCoach(trainArray);                            
    }

    else if (!trainArray[seatNumber - 1].isSelected) {
    trainArray[seatNumber - 1].isSelected = true;
    trainArray[seatNumber - 1].className = cssSelected;
    setFirstClassCoach(trainArray);            
    }    
  }

  function handleClickSecondClass(seatNumber) {
    let trainArray = secondClassCoach;
    if (trainArray[seatNumber - 1].isSelected) {
      trainArray[seatNumber - 1].isSelected = false;
      trainArray[seatNumber - 1].className = cssFree;
      setSecondClassCoach(trainArray);                
    }

    else if (!trainArray[seatNumber - 1].isSelected) {
    trainArray[seatNumber - 1].isSelected = true;
    trainArray[seatNumber - 1].className = cssSelected;
    setSecondClassCoach(trainArray);        
    }    
  }

  function handleClickBistro(seatNumber) {
    let trainArray = bistroCoach;
    if (trainArray[seatNumber - 1].isSelected) {
      trainArray[seatNumber - 1].isSelected = false;
      trainArray[seatNumber - 1].className = cssFree;
      setBistroCoach(trainArray);                
    }

    else if (!trainArray[seatNumber - 1].isSelected) {
    trainArray[seatNumber - 1].isSelected = true;
    trainArray[seatNumber - 1].className = cssSelected;
    setBistroCoach(trainArray);        
    }    
  }

  function handleClickTrailer(seatNumber) {
    let trainArray = trailerCoach;
    if (trainArray[seatNumber - 1].isSelected) {
      trainArray[seatNumber - 1].isSelected = false;
      trainArray[seatNumber - 1].className = cssFree;
      setTrailerCoach(trainArray);                
    }

    else if (!trainArray[seatNumber - 1].isSelected) {
    trainArray[seatNumber - 1].isSelected = true;
    trainArray[seatNumber - 1].className = cssSelected;
    setTrailerCoach(trainArray);        
    }        
  }

  if(coachModel == firstClassCoachModel) {
    return (
      <div className="grid grid-cols-4 ml-8 mt-10">         
        {firstClassCoach.map((seat) => (          
            <div className= "m-2" key={seat.id}>
              <button onClick={() => handleClickFirstClass(seat.seatNumber)} className= {seat.className}>{seat.seatNumber}</button>                       
            </div>
          ))}                
      </div>
    );
  }

  else if(coachModel == secondClassCoachModel) {
    return (
      <div className="grid grid-cols-4 ml-8 mt-10">         
        {secondClassCoach.map((seat) => (          
            <div className= "m-2" key={seat.id}>
              <button onClick={() => handleClickSecondClass(seat.seatNumber)} className= {seat.className}>{seat.seatNumber}</button>                       
            </div>
          ))}                
      </div>
    );
  }

  else if(coachModel == bistroCoachModel) {
    return (
      <div className="grid grid-cols-4 ml-8 mt-10">         
        {bistroCoach.map((seat) => (          
            <div className= "m-2" key={seat.id}>
              <button onClick={() => handleClickBistro(seat.seatNumber)} className= {seat.className}>{seat.seatNumber}</button>                       
            </div>
          ))}                
      </div>
    );
  }

  else if(coachModel == trailerCoachModel) {
    return (
      <div className="grid grid-cols-4 ml-8 mt-10">         
        {trailerCoach.map((seat) => (          
            <div className= "m-2" key={seat.id}>
              <button onClick={() => handleClickTrailer(seat.seatNumber)} className= {seat.className}>{seat.seatNumber}</button>                       
            </div>
          ))}                
      </div>
    );
  } 
    
}

export async function getServerSideProps() {    
   
  const { db } = await connectToDatabase();    
  
  const trainsData = await db.collection("trains").find({}).toArray();
  const ticketsData = await db.collection("tickets").find({}).toArray();
  const coachesData = await db.collection("coaches").find({}).toArray();
    
    
  const trains = JSON.parse(JSON.stringify(trainsData));
  const tickets = JSON.parse(JSON.stringify(ticketsData));
  const coaches = JSON.parse(JSON.stringify(coachesData));
   

  return {
    props: {        
      trains : trains,
      tickets : tickets,
      coaches : coaches,        
    },
  };
}



  