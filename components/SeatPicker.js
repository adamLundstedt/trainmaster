import dbConnect from '../lib/dbConnect';
import Train from '../models/Train';
import Ticket from '../models/Ticket';

export default function SeatPicker({chosenTrain}) {

    const chosenTrainId = '632ac4233b9bdbfc822b4d13';

    

    
  
  
      

    
    return (
      <div> moo</div>
    );

    
}

export async function getServerSideProps() {
  await dbConnect()  
  const result = await Train.find(chosenTrainId);
  const chosenTrain = result.toObject();
  chosenTrain._id = chosenTrain._id.toString()
  

  return { props: { chosenTrain } }
}


  