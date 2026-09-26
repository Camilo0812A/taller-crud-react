export default function Tarea({ tarea, onMarcar }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarea.hecha}
        onChange={() => onMarcar(tarea.id)}
      />
      <span style={{ textDecoration: tarea.hecha ? "line-through" : "none" }}>
        {tarea.texto}
      </span>
    </li>
  );
}
