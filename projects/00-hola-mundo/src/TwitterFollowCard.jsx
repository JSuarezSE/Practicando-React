export function TwitterFollowCard({
  formatUserName,
  username,
  name,
  isFollowing,
}) {
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
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
