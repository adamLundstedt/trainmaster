
import { connectToDatabase } from "../lib/mongodb";
import React, { useState } from 'react';


export default function ChooseSeats({trains, tickets, coaches}) {

  let firstClassCoachModel = [];
  let secondClassCoachModel = [];
  let bistroCoachModel = [];
  let trailerCoachModel = [];

  for(let i = 1; i < 55; i++) {
    let isSpecial = false;
    let className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    if(i == 46 || i == 49 || i == 52 ) {
      isSpecial = true
      className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    }
    firstClassCoachModel.push({id: i, seatNumber: i, specialNeeds: isSpecial, isSelected: false, isBooked: false, className: className})
  }

  for(let i = 1; i < 75; i++) {
    let isSpecial = false;
    let className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    if(i == 3 || i == 4 || i == 71 || i == 72) {
      isSpecial = true
      className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    }
    secondClassCoachModel.push({id: i, seatNumber: i, specialNeeds: isSpecial, isSelected: false, isBooked: false, className: className})
  }

  for(let i = 1; i < 29; i++) {
    let isSpecial = false;
    let className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    if(i == 3 || i == 4) {
      isSpecial = true
      className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    }
    bistroCoachModel.push({id: i, seatNumber: i, specialNeeds: isSpecial, isSelected: false, isBooked: false, className: className})
  }

  for(let i = 1; i < 41; i++) {
    let className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";   
    trailerCoachModel.push({id: i, seatNumber: i, specialNeeds: false, isSelected: false, isBooked: false, className:""})
  }
   
  trailerCoachModel.push({
    id: 41, 
    seatNumber: 79, 
    specialNeeds: true, 
    isSelected: false, 
    isBooked: false, 
    className: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"})
  trailerCoachModel.push({
    id: 42, 
    seatNumber: 80, 
    specialNeeds: true, 
    isSelected: false, 
    isBooked: false, 
    className: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"})
  

  const chosenTrainId = '632ac4233b9bdbfc822b4d13';

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

  const [arrayIndex, setArrayIndex] = useState(0);

  let coachCategory = chosenTrainCoaches[arrayIndex].category
  
  let coachModel;

  if (coachCategory == "1CLASS") {    
    for(let ticket of ticketsForGivenTrain) {
      for (let coachSeats of firstClassCoachModel) {        
        if(ticket.seatNumber == coachSeats.seatNumber) {
          coachSeats.isBooked = true;
          coachSeats.className = "bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        }        
      }
    }
    coachModel = firstClassCoachModel;

  }
  else if (coachCategory == "2CLASS") {
    for(let ticket of ticketsForGivenTrain) {
      for (let coachSeats of secondClassCoachModel) {
        if(ticket.seatNumber == coachSeats.seatNumber) {
          coachSeats.isBooked = true;
          coachSeats.className = "bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        }
      }
    }
    coachModel == secondClassCoachModel;
  }
  else if (coachCategory == "BISTRO") {
    for(let ticket of ticketsForGivenTrain) {
      for (let coachSeats of bistroCoachModel) {
        if(ticket.seatNumber == coachSeats.seatNumber) {
          coachSeats.isBooked = true;
          coachSeats.className = "bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        }
      }
    }
    coachModel == bistroCoachModel;
  }
  else if (coachCategory == "TRAILER") {
    for(let ticket of ticketsForGivenTrain) {
      for (let coachSeats of trailerCoachModel) {
        if(ticket.seatNumber == coachSeats.seatNumber) {
          coachSeats.isBooked = true;
          coachSeats.className = "bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        }
      }
    }
    coachModel = trailerCoachModel;
  }  

  const [coachToDisplay, setCoachToDisplay] = useState(coachModel);

  console.log("trains: ",trains);
  console.log("tickets: ", tickets);
  console.log("coaches: ", coaches);    
  console.log("chosen train: ", chosenTrain);
  console.log("chosen train coaches: ", chosenTrainCoaches)
  console.log("tickets for given train: ", ticketsForGivenTrain);
  console.log("coach to display", coachToDisplay);
  console.log("coach category: ", coachCategory)   

    
  return (
    <div className="grid grid-cols-4 ml-8 mt-10">      
      {coachToDisplay.map((seat) => (
          <div className= "m-2" key={seat.id}>
            <button className= {seat.className}>{seat.seatNumber}</button>                       
          </div>
        ))}                
    </div>
  );
    
}

export async function getServerSideProps(context) {    
   
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



  