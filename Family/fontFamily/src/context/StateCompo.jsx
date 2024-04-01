/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";

import { counterContext } from "./counterContext";

// eslint-disable-next-line no-unused-vars
export const StateCompo = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState("");
  const [fontsData, setFontsData] = useState(null);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCC4-sB_aUVAer2UGUiBY3HvYLflXfgih8"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setFontsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedFont]);

  function handleClick() {
    if (fontsData && fontsData.items) {
      // Generar un índice aleatorio para seleccionar una fuente al azar
      const randomIndex = Math.floor(Math.random() * fontsData.items.length);
      setRandomIndex(randomIndex);
      // Obtener el nombre de la fuente aleatoria
      const randomFont = fontsData.items[randomIndex].family;
      // Actualizar el estado con la fuente aleatoria seleccionada
      setSelectedFont(randomFont);
    }
  }

  return (
    <counterContext.Provider
      value={{
        selectedFont,
        setSelectedFont,
        fontsData,
        setFontsData,
        randomIndex,
        setRandomIndex,
        handleClick,
      }}
    >
      {children}
    </counterContext.Provider>
  );
};
