import '../styles/nav.scss';

export default function Nav() {
  return (
    <div className="nav-container">
      <div>Tuolingo</div>
      <div className="nav-option">
        <a href="#">LEARN</a>
        <a href="#">PRACTICE</a>
        <a href="#">LEADERBOARDS</a>
        <a href="#">QUESTS</a>
        <a href="#">SHOP</a>
        <a href="#">PROFILE</a>
        <a href="#">MORE</a>
      </div>
    </div>
  );
}
