/* eslint-disable react/prop-types */
import { useState } from "react";

export const InvidualForm = ({ item, inputActualizado, onDelete }) => {
  const [edit, setEdit] = useState(false);

  function Editar() {
    const [nuevoValor, setNuevoValor] = useState(item.title);

    function change(e) {
      const newNota = e.target.value;
      setNuevoValor(newNota);
    }

    function handleNewValue(e) {
      e.preventDefault();
      inputActualizado(item.id, nuevoValor);
      setEdit(false);
    }

    return (
      <form className="container">
        <textarea type="text" onChange={change} value={nuevoValor} className="textarea"/>
        <button onClick={handleNewValue} className="button">Update</button>
      </form>
    );
  }

  function FormNormal() {
    return (
      <div className="container">
        <textarea className="textarea">{item.title}</textarea>
        <button className="button" onClick={() => setEdit(true)}>Edit</button>
        <button className="button" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return <> {edit ? <Editar /> : <FormNormal />}</>;
};
