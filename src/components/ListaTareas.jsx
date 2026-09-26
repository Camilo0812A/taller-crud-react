import Tarea from "./Tarea";

export default function ListaTareas({ tareas }) {
  if (tareas.length === 0) {
    return <p>No hay tareas</p>;
  }

  return (
    <ul>
      {tareas.map((t) => (
        <Tarea key={t.id} tarea={t} />
      ))}
    </ul>
  );
}
