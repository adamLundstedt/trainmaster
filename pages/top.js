import { mongo } from "mongoose";
import { connectToDatabase } from "../lib/mongodb";

export default function Top({ users }) {
  return (
    <div>
            <ul>
        {users.map((user) => (
          <li>
            <h2>{user.first_name}</h2>
            <h3>{user.last_name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  mongo.s;

  const users = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
