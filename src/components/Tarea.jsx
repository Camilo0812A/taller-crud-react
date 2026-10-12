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
      <li className="tarea">
        <form onSubmit={guardar}>
          <input
            type="text"
            value={borrador}
            onChange={(e) => setBorrador(e.target.value)}
            autoFocus
          />
          <button type="submit" className="btn-guardar">Guardar</button>
          <button type="button" className="btn-cancelar" onClick={cancelar}>
            Cancelar
          </button>
        </form>
      </li>
    );
  }

  return (
    <li className="tarea">
      <input
        type="checkbox"
        checked={tarea.hecha}
        onChange={() => onMarcar(tarea.id)}
      />
      <span className={tarea.hecha ? "texto hecha" : "texto"}>
        {tarea.texto}
      </span>
      <button className="btn-editar" onClick={empezarEdicion}>
        Editar
      </button>
      <button className="btn-eliminar" onClick={eliminar}>
        Eliminar
      </button>
    </li>
  );
}
