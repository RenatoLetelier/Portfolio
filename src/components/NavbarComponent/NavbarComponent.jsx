import githubIcon from "../../assets/icons/github.svg";
import "./NavbarComponent.css";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <h1 className="title">RL</h1>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="/">In</a>
            </li>
            <li>
              <img src={githubIcon} alt="GitHub" width="16" height="16" />
            </li>
            <li>
              <a href="/">Language</a>
            </li>
            <li>
              <a href="/">Theme</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
