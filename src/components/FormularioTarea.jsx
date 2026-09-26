import { useState } from "react";

const MAXIMO = 80;

export default function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState("");

  const estaVacio = texto.trim() === "";
  const esMuyLargo = texto.length > MAXIMO;

  function manejarEnvio(e) {
    e.preventDefault();
    if (estaVacio || esMuyLargo) return;
    onAgregar(texto.trim());
    setTexto("");
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit" disabled={estaVacio || esMuyLargo}>
        Agregar
      </button>
      <p>
        {texto.length} / {MAXIMO}
      </p>
    </form>
  );
}
