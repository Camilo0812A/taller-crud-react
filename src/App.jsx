// Taller CRUD en memoria
// Autor: David Camilo Colmenares

import { useState } from "react";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import "./App.css";
import Filtros from "./components/Filtros";

const tareasIniciales = [
  { id: "t1", texto: "Leer el capítulo 3", hecha: true },
  { id: "t2", texto: "Entregar el taller de React", hecha: false },
  { id: "t3", texto: "Repasar map y filter", hecha: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState("todas");

  function agregarTarea(texto) {
    const nueva = { id: crypto.randomUUID(), texto, hecha: false };
    setTareas((prev) => [...prev, nueva]);
  }

  function marcarTarea(id) {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)),
    );
  } // <- aquí se cierra marcarTarea

  function editarTarea(id, textoNuevo) {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, texto: textoNuevo } : t)),
    );
  }
  function eliminarTarea(id) {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  }

  const tareasVisibles = tareas.filter((t) => {
  if (filtro === "pendientes") return !t.hecha;
  if (filtro === "hechas") return t.hecha;
  return true; // "todas"
});

  return (
    <>
      <h1>Mis tareas</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <Filtros filtro={filtro} onCambiar={setFiltro} />
      <ListaTareas
        tareas={tareasVisibles}
        onMarcar={marcarTarea}
        onEditar={editarTarea}
        onEliminar={eliminarTarea}
      />
    </>
  );
}

export default App;
