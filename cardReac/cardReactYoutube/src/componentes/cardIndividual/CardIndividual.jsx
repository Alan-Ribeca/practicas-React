/* eslint-disable react/prop-types */
import { useState } from "react";

export const CardIndividual = ({ user }) => {
  const { id, firstName, email, image } = user;

  const [parrafo, setParrafo] = useState(false);

  const handleClick = () => {
    setParrafo(!parrafo);
  };

  return (
    <div className="divUser">
      <img src={image} alt="img de un hombre" className="imgUsuario" />
      <h2 className="tituloUser">{firstName}</h2>
      <p className="pUser">{email}</p>
      <button id={id} onClick={() => handleClick()}>
        {parrafo ? "Contactado" : "Contactar"}
      </button>
    </div>
  );
};
