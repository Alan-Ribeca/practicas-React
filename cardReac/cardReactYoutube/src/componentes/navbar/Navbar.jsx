/* eslint-disable react/prop-types */
import "./navbar.css";

export const Navbar = ({ titulo }) => {
  return (
    <>
    <nav className="navbar">
      <h1>{titulo || "Titulo por defecto"}</h1>
    </nav>
    </>
  );
};

export default Navbar