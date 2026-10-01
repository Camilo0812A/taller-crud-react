// Taller CRUD en memoria
// Autor: David Camilo Colmenares

import { useState } from "react";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import "./App.css";
import Filtros from "./components/Filtros";
import Resumen from "./components/Resumen";

const CLAVE_STORAGE = "tareas";

const tareasIniciales = [
  { id: "t1", texto: "Leer el capítulo 3", hecha: true },
  { id: "t2", texto: "Entregar el taller de React", hecha: false },
  { id: "t3", texto: "Repasar map y filter", hecha: false },
];


function leerTareasGuardadas() {
  try {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    if (guardado === null) return tareasIniciales;
    return JSON.parse(guardado);
  } catch {
    return tareasIniciales; 
  }
}

function App() {
  
  const [tareas, setTareas] = useState(leerTareasGuardadas);
  const [filtro, setFiltro] = useState("todas");

  
  function actualizarTareas(nuevas) {
    setTareas(nuevas);
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(nuevas));
    } catch {
      
    }
  }

  function agregarTarea(texto) {
    const nueva = { id: crypto.randomUUID(), texto, hecha: false };
    actualizarTareas([...tareas, nueva]);
  }

  function marcarTarea(id) {
    actualizarTareas(
      tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)),
    );
  }

  function editarTarea(id, textoNuevo) {
    actualizarTareas(
      tareas.map((t) => (t.id === id ? { ...t, texto: textoNuevo } : t)),
    );
  }

  function eliminarTarea(id) {
    actualizarTareas(tareas.filter((t) => t.id !== id));
  }


  function borrarHechas() {
    actualizarTareas(tareas.filter((t) => !t.hecha));
  }


  const tareasVisibles = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.hecha;
    if (filtro === "hechas") return t.hecha;
    return true; // "todas"
  });
  
  const pendientes = tareas.filter((t) => !t.hecha).length;

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
      <Resumen
        pendientes={pendientes}
        total={tareas.length}
        onBorrarHechas={borrarHechas}
      />
    </>
  );
}

export default App;