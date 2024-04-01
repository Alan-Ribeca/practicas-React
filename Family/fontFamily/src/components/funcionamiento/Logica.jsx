import { useState, useEffect } from "react";

export const Logica = () => {
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

  // Imprimir en la consola la cantidad de cambios disponibles
  console.log(
    "Cantidad de cambios disponibles:",
    fontsData ? fontsData.items.length : 0
  );
  // Imprimir en la consola el número del array que se seleccionó
  console.log("Número del array seleccionado:", randomIndex);

  return (
    <>

      {selectedFont && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${selectedFont}&display=swap`}
        />
      )}
      <div className="cambiando" style={{ fontFamily: selectedFont }}>
        <h1>Prueba</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error
          rerum odit ab voluptatum, vitae ea provident aliquid aperiam ut
          similique omnis culpa quod, quae esse in aspernatur? Eaque, voluptas
        </p>
        <button onClick={handleClick}>Cambiar</button>
        {randomIndex !== null && (
          <p>Fuente cambiada a: {fontsData.items[randomIndex].family}</p>
        )}
      </div> 
    </>
  );
};
