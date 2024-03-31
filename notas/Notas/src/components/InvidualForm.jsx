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
      <form>
        <input type="text" onChange={change} value={nuevoValor} />
        <button onClick={handleNewValue}>Update</button>
      </form>
    );
  }

  function FormNormal() {
    return (
      <div>
        {item.title}
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return <> {edit ? <Editar /> : <FormNormal />}</>;
};
