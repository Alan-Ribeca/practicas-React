import { counterContext } from "../../context/counterContext";
import { useContext } from "react";
import "./gridCuatro.scss";

export const GridCuatro = () => {
  const {
    selectedFont,
    handleClickAnterior,
    handleClickSiguiente,
    indexActual,
  } = useContext(counterContext);

  return (
    <>
      <div className="containerGridCuatro">
        <h5 className="detalles">Detalles</h5>
        <hr className="hrDetalles" />
        <p className="nombreFuente">
          Fuente: {selectedFont ? selectedFont : "Arial"}
        </p>
        <p className="nombreFuente">Total de fuentes: 1618</p>
        <p className="nombreFuente">
          Numero de la fuente: {indexActual ? indexActual : 0}
        </p>
        <p className="nombreFuente">
          <a
            href={`https://fonts.google.com/specimen/${selectedFont
              .split(" ")
              .join("+")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fuenteA"
          >
            Usar fuente...
          </a>
        </p>
        <div className="containerBoton">
          <button className="btnAnterior" onClick={handleClickAnterior}>
            Anterior
          </button>
          <button className="btnSiguiente" onClick={handleClickSiguiente}>
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
