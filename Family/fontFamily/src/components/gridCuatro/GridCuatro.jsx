import { counterContext } from "../../context/counterContext";
import { useContext } from "react";
import "./gridCuatro.scss";

export const GridCuatro = () => {
  const { selectedFont, handleClickAnterior, handleClickSiguiente, indexActual } = useContext(counterContext);

  return (
    <>
      <div className="containerGridCuatro">
        <h5 className="detalles">Detalles</h5>
        <p className="nombreFuente">
          Fuente: {selectedFont ? selectedFont : "Arial"}
        </p>
        <p className="nombreFuente">Total de fuentes: 1618</p>
        <p className="nombreFuente">Numero de la fuente: {indexActual ? indexActual : 1}</p>
        <button onClick={handleClickAnterior}>Anterior</button>
        <button onClick={handleClickSiguiente}>Siguiente</button>
      </div>
    </>
  );
};