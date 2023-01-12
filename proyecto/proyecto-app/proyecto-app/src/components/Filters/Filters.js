import "./Filter.css"

export default function Filters({nombreFiltro, datoFiltro, mostrarValor}) {
    return(
        <section className='row section-filters py-5'>
            <div className='filters d-flex justify-content-between flex-wrap'>
                <div id="filter-color" className="form-check form-switch px-5 py-2">
                    <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={mostrarValor}/>
                    <label className="form-check-label" htmlFor={nombreFiltro}>{nombreFiltro}</label>
                </div>
            </div>
        </section>
    )
}