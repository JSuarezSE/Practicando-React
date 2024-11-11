import { TwitterFollowCard } from "./TwitterFollowCard";
import "./app.css";

const users = [
  {
    userName: "josue",
    name: "josue xd",
    isFollowing: false,
  },
  {
    userName: "pepe",
    name: "pepe xd",
    isFollowing: true,
  },
  {
    userName: "maria",
    name: "maria xd",
    isFollowing: true,
  },
];
export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="app">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            formatUserName={formatUserName}
            s
            username={userName}
            name={name}
            intialIsFollowing={isFollowing}
          ></TwitterFollowCard>
        );
      })}
    </section>
  );
}
