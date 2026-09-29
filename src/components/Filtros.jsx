const opciones = [
  { valor: "todas", etiqueta: "Todas" },
  { valor: "pendientes", etiqueta: "Pendientes" },
  { valor: "hechas", etiqueta: "Hechas" },
];

export default function Filtros({ filtro, onCambiar }) {
  return (
    <div>
      {opciones.map((o) => (
        <button
          key={o.valor}
          onClick={() => onCambiar(o.valor)}
          style={{ fontWeight: filtro === o.valor ? "bold" : "normal" }}
        >
          {o.etiqueta}
        </button>
      ))}
    </div>
  );
}