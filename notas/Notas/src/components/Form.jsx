import { useState } from "react";
import { InvidualForm } from "./InvidualForm";

export const Form = () => {
  const [input, setInput] = useState("");
  const [nota, setNota] = useState([]);

  function change(e) {
    const mensaje = e.target.value;
    setInput(mensaje);
  }

  function enviar(e) {
    e.preventDefault();

    const nuevaNota = {
      id: Math.random(),
      title: input,
    };

    setNota([...nota, nuevaNota]);

    setInput("");
  }

  function handleNotaActualizada(id, valor) {
    const temp = [...nota]
    const item = temp.find((item) => item.id === id)
    item.title = valor
    setNota(temp)
  }


  function handleDelete(id) {
    const eliminarNota = nota.filter(item => item.id !== id)

    setNota(eliminarNota)
  }

  return (
    <>
      <section className="formulario">
        <form onSubmit={enviar} className="form">
          <input placeholder="Escribir nota" onChange={change} value={input} className="inputForm"/>
          <input type="submit"  className="submit"/>
        </form>
      </section>

      <section className="container-tareas">
        {nota.map((item) => (
          <InvidualForm
            key={item.id}
            item={item}
            inputActualizado={handleNotaActualizada}
            onDelete={handleDelete}
          />
        ))}
      </section>
    </>
  );
};
