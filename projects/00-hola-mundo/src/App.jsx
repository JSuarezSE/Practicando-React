import { TwitterFollowCard } from "./TwitterFollowCard";
import "./app.css";
export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="app">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        username="josue"
        name="josuexd"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        username="josue"
        name="josuexd"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        username="josue"
        name="josuexd"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        username="josue"
        name="josuexd"
      />
    </section>
  );
}
