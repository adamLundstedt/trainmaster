import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";
const ObjectId = require("mongodb").ObjectId;

export default function Top({ coaches, users, userOne }) {
  return (
    <div>
      <h1>{JSON.stringify(userOne)}</h1>
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

  const userOne = await db
    .collection("users")
    .find({ _id: ObjectId("632ad444b8c68bfa9e46f7ac") })
    .toArray();
  const coaches = await db.collection("coaches").find({}).limit(1000).toArray();
  const users = await db.collection("users").find({}).limit(1000).toArray();
  return {
    props: {
      coaches: JSON.parse(JSON.stringify(coaches)),
      users: JSON.parse(JSON.stringify(users)),
      userOne: JSON.parse(JSON.stringify(userOne)),
    },
  };
}
