// Taller CRUD en memoria
// Autor: David Camilo Colmenares

import { useState } from "react";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import './App.css'

const tareasIniciales = [
  { id: "t1", texto: "Leer el capítulo 3", hecha: true },
  { id: "t2", texto: "Entregar el taller de React", hecha: false },
  { id: "t3", texto: "Repasar map y filter", hecha: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  console.log(tareas);

  function agregarTarea(texto) {
    const nueva = { id: crypto.randomUUID(), texto, hecha: false };
    setTareas((prev) => [...prev, nueva]);
  }

  function marcarTarea(id) {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t))
    );
  }

  return (
    <>
      <h1>Mis tareas</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} onMarcar={marcarTarea} />
    </>
  );
}

export default App
