/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CardIndividual } from "../cardIndividual/CardIndividual";
import "./card.css";


export const CardContainer = () => {

  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=3')
    .then(res => res.json())
    .then(data => {
      setUsuario(data.users)
    })
  }, [])

  return (
    <section>
      {usuario.map((user) => {
        return <CardIndividual key={user.id} user={user} />;
      })}
    </section>
  );
};
