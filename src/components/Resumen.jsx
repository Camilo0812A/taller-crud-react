export default function Resumen({ pendientes, total, onBorrarHechas }) {
  
  const hechas = total - pendientes;

  return (
    <div className="resumen">
      <span>
        <b>{pendientes} pendientes</b> de {total}
      </span>
      <button onClick={onBorrarHechas} disabled={hechas === 0}>
        Borrar hechas
      </button>
    </div>
  );
}