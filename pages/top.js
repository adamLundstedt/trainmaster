import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";

export default function Top({ coaches, users }) {
  return (
    <div>
      <ul>
        {coaches.map((coach) => (
          <li key={coach._id}>
            <h2>{coach.coachSerialNumber}</h2>
            <h3>{coach.category}</h3>
            <ul>
              {coach.seats.map((seat) => (
                <li key={seat._id}>{seat.seatNumber}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h2>{user.firstName}</h2>
            <h3>{user.lastName}</h3>
            <h3>{user.email}</h3>
            <p>{user.phoneNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
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
}
