import "./navbar.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <p>logo</p>
        <ul className="ulNav">
          <li className="liNav">Crear</li>
          <li className="liNav">Navagar</li>
        </ul>
      </nav>
      <hr  className="hrNav"/>
    </header>
  );
};
