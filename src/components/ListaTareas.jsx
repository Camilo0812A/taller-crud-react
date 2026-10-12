import Tarea from "./Tarea";

export default function ListaTareas({ tareas, onMarcar, onEditar, onEliminar }) {
  if (tareas.length === 0) {
    return <p className="vacio">No hay tareas</p>;
  }

  return (
    <ul className="lista">
      {tareas.map((t) => (
        <Tarea
          key={t.id}
          tarea={t}
          onMarcar={onMarcar}
          onEditar={onEditar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}
