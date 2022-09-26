import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";

export async function getStaticProps () {
  
  const { db } = await connectToDatabase();
  mongo.s;

  const routes = await db.collection("routes").find({}).limit(5).toArray();
  
 
  return {
    props: {
      routes: JSON.parse(JSON.stringify(routes))
    },
  };
  

  
}


export default function SearchStation({ routes }) {
  return (
    <div>
      
      {routes.map((route) => (
          <li key={route._id}>
            <h2>{route.routeName}</h2>
            
          </li>
        ))}
      
    </div>
  );
}
 


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