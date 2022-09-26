import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";

export const getStaticProps = async () => {
  
  const { db } = await connectToDatabase();
  mongo.s;

  const stations = await db.collection("stations").find({}).limit(5).toArray();
  
  return {
    props: {
      stations: JSON.parse(JSON.stringify(stations)),
    }
  }
  

  
}


const SearchStation = ({ stations }) => {
  return (
    <div>
      <li>
        <h1>{stations}</h1>
      </li>
    </div>
  );
}
 
export default SearchStation;

/* export async function getStaticProps() {
  const { db } = await connectToDatabase();

  mongo.s;

  const coaches = await db.collection("coaches").find({}).limit(1000).toArray();
  const users = await db.collection("users").find({}).limit(1000).toArray();
  return {
    props: {
      coaches: JSON.parse(JSON.stringify(coaches)),
      users: JSON.parse(JSON.stringify(users)),
    },
  };
} */