const opciones = [
  { valor: "todas", etiqueta: "Todas" },
  { valor: "pendientes", etiqueta: "Pendientes" },
  { valor: "hechas", etiqueta: "Hechas" },
];

export default function Filtros({ filtro, onCambiar }) {
  return (
    <div className="filtros">
      {opciones.map((o) => (
        <button
          key={o.valor}
          onClick={() => onCambiar(o.valor)}
          className={filtro === o.valor ? "activo" : ""}
        >
          {o.etiqueta}
        </button>
      ))}
    </div>
  );
}