import "./contenedor.scss";
import { useContext, useEffect } from "react";
import { counterContext } from "../../context/counterContext";
import { GridUno } from "../gridUno/GridUno";
import { GridDos } from "../gridDos/GridDos";
import { GridTres } from "../gridTres/GridTres";
import { GridCuatro } from "../gridCuatro/GridCuatro";

export const Container = () => {
  const { selectedFont, handleClick } = useContext(counterContext);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) {
        handleClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  return (
    <>
      {selectedFont && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${selectedFont}&display=swap`}
        />
      )}
      <section className="containerGeneral">
        <div className="titulo">
          <h1 className="h1Principal">Font-Family: Generator</h1>
        </div>

        <div className="input">
          <p className="instrucciones">
            Presione la barra espaciadora o ingrese el nombre de una propiedad
          </p>
          <input
            type="text"
            placeholder="(el nombre de la propiedad) y un logo a la derecha"
            className="inputBuscador"
          />
        </div>
        <section className="container" style={{ fontFamily: selectedFont }}>
          <article className="grid" style={{ fontFamily: selectedFont }}>
            <GridUno style={{ fontFamily: selectedFont }} />
            <GridDos style={{ fontFamily: selectedFont }} />
            <GridTres style={{ fontFamily: selectedFont }} />
            <GridCuatro style={{ fontFamily: selectedFont }} />
          </article>
        </section>
      </section>
    </>
  );
};
