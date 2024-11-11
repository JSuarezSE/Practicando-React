import { useState } from "react";

export function TwitterFollowCard({
  formatUserName,
  username,
  name,
  intialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(intialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar"
          src="https://unavatar.io/kikobeats"
        ></img>
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(username)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followcard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
