import{useEffect, useState} from 'react';
import { Fragment } from 'react';

import Navegation from "../Navegation/Navegation"
import Filters from "../Filters/Filters"
import SectionCards from "../SectionCards/SectionCards"


export default function Characters() {
    let [datos,setDatos] = useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);

    const mostrarValor =(e)=>{
        if(e.target.checked){
            let datoFiltro = e.target.value;
            if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                let resultado = datos.filter((ch)=> ch.status === datoFiltro)     
                setDatos(resultado)
            }
            if(datoFiltro === "Female" || datoFiltro === "Male"){
                let resultado = datos.filter((ch)=> ch.gender === datoFiltro)
                setDatos(resultado)
            }
            if(datoFiltro === "unknown"){
                let resultado = datos.filter((ch)=> ch.origin.name === datoFiltro)
                setDatos(resultado)
            }
        } else {
             setDatos(infoCompleta)
        }
    }

    const traerInfo=async()=>{

        let info = await fetch("https://rickandmortyapi.com/api/character")
                    .then(respuesta => respuesta.json())
                    .catch(error => console.log("Hay un error!! " +error))
        return info
    }

    const mostrarInfo = async ()=>{
            let dato = await traerInfo()
            let infoPersonajes = dato.results
            console.log(infoPersonajes)
            setDatos(infoPersonajes)
            setInfoCompleta(infoPersonajes)
        }

    useEffect(()=>{
    
        mostrarInfo()

    },[])

    return (
        <Fragment>
            <Navegation/>
            <section className="d-flex p-2 ">
                <h2>Filters</h2>
                <Filters nombreFiltro="Alive" datoFiltro="Alive" mostrarValor={mostrarValor}/>
                <Filters nombreFiltro="Dead" datoFiltro="Dead" mostrarValor={mostrarValor}/>
                <Filters nombreFiltro="Female" datoFiltro="Female" mostrarValor={mostrarValor}/>
                <Filters nombreFiltro="Male" datoFiltro="Male" mostrarValor={mostrarValor}/>
                <Filters nombreFiltro= "Origin Unknown" datoFiltro="Unknown" mostrarValor={mostrarValor}/>
            </section>
            
            <SectionCards datos={datos}/>
        </Fragment>
    )
}
