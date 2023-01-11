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
                let resultado = datos.filter((ch)=> ch.status === datoFiltro) // Este filter genera un nuevo array con solo los elementos que cumplen la condicion    
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

        let info = await fetch("https://rickandmortyapi.com/api/character") // busca y trae la info de la API
                    .then(respuesta => respuesta.json()) // respuesta.jason() --> transforma la info en JSON
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
            <section className="bg-success d-flex p-2">
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