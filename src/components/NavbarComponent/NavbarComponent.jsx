import "./NavbarComponent.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">RL</h1>
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
    </nav>
  );
}
