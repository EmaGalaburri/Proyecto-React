import "./Filter.css"

export default function Filters({nombreFiltro, datoFiltro, mostrarValor}) {
    return(
        // cambiamos class por className y for por htmlFor para que diferencie el bucle y el atributo  o el nombre de una clase con clases POO

        <div id="filter-color" className="form-check form-switch mx-2">
        <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={mostrarValor}/>
        <label className="form-check-label" htmlFor={nombreFiltro}>{nombreFiltro}</label>
        </div>

        // <div>
        //     <input type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={mostrarValor}/>
        //     <label for={nombreFiltro}>{nombreFiltro}</label>
        // </div>
    )
}