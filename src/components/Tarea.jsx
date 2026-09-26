export default function Tarea({ tarea }) {
  return (
    <li style={{ textDecoration: tarea.hecha ? "line-through" : "none" }}>
      {tarea.texto}
    </li>
  );
}
