import { GridUno } from "../gridUno/GridUno";
import "./contenedor.scss";

export const Container = () => {
  return (
    <section className="containerGeneral">
      <div className="titulo">
        <h1 className="h1Principal">Font-Family: Generator</h1>
      </div>

      <div className="input">
        <p className="instrucciones">Precione la barra espaciadora o ingrese el nombre de una propiedad</p>
        <input
          type="text"
          placeholder="(el nombre de la propiedad) y un logo a la derecha"
          className="inputBuscador"
        />
      </div>
      <article className="grid">
        <GridUno />
      </article>
    </section>
  );
};
