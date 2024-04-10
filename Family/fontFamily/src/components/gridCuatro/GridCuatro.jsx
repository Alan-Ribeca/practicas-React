import { counterContext } from "../../context/counterContext";
import { useContext } from "react";
import "./gridCuatro.scss";

export const GridCuatro = () => {
  const {
    selectedFont,
    handleClickAnterior,
    handleClickSiguiente,
    indexActual,
    category
  } = useContext(counterContext);

  return (
    <>
      <div className="containerGridCuatro">
        <h5 className="detalles">Detalles</h5>
        <hr  className="hrDetalles"/>
        <p className="nombreFuente">
          Fuente: {selectedFont ? selectedFont : "Arial"}
        </p>
        <p className="category">Categoria: {category}</p>
        <p className="nombreFuente">Total de fuentes: 1618</p>
        <p className="nombreFuente">
          Numero de la fuente: {indexActual ? indexActual : 1}
        </p>
        <div className="containerBoton">
          <button className="btnAnterior" onClick={handleClickAnterior}>Anterior</button>
          <button className="btnSiguiente" onClick={handleClickSiguiente}>Siguiente</button>
        </div>
      </div>
    </>
  );
};
