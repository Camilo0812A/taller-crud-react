import { useState } from "react";

export default function Tarea({ tarea, onMarcar, onEditar, onEliminar }) {
  const [editando, setEditando] = useState(false);
  const [borrador, setBorrador] = useState(tarea.texto);

  function empezarEdicion() {
    setBorrador(tarea.texto); // parte del texto actual
    setEditando(true);
  }
  function eliminar() {
    if (window.confirm("¿Eliminar esta tarea?")) {
      onEliminar(tarea.id);
    }
  }

  function guardar(e) {
    e.preventDefault(); // evita que el formulario recargue la página
    const textoLimpio = borrador.trim();
    if (textoLimpio === "") return; // no se guarda vacío
    onEditar(tarea.id, textoLimpio);
    setEditando(false);
  }

  function cancelar() {
    setEditando(false); // el texto de la tarea no se toca
  }

  if (editando) {
    return (
      <li>
        <form onSubmit={guardar}>
          <input
            value={borrador}
            onChange={(e) => setBorrador(e.target.value)}
            autoFocus
          />
          <button type="submit">Guardar</button>
          <button type="button" onClick={cancelar}>
            Cancelar
          </button>
        </form>
      </li>
    );
  }

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
      <button onClick={empezarEdicion}>Editar</button>
      <button onClick={eliminar}>Eliminar</button>
    </li>
  );
}
