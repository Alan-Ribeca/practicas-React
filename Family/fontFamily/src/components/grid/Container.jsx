import "./contenedor.scss";
import { useContext } from "react";
import { counterContext } from "../../context/counterContext";
import { GridUno } from "../gridUno/GridUno";
import { GridDos } from "../gridDos/GridDos";
import { GridTres } from "../gridTres/GridTres";

export const Container = () => {
  const { selectedFont, fontsData, randomIndex, handleClick } =
    useContext(counterContext);

  return (
    <>
      <section className="containerGeneral">
        <div className="titulo">
          <h1 className="h1Principal">Font-Family: Generator</h1>
        </div>

        <div className="input">
          <p className="instrucciones">
            Precione la barra espaciadora o ingrese el nombre de una propiedad
          </p>
          <input
            type="text"
            placeholder="(el nombre de la propiedad) y un logo a la derecha"
            className="inputBuscador"
          />
        </div>
        <section className="container">

        <article className="grid">
          <GridUno />
          <GridDos />
          <GridTres />
        </article>
        </section>
      </section>

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
