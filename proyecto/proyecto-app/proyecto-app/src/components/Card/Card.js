import {useState} from "react";
import "./Card.css"

export default function Card({info}) {
    const [ocultar,setOcultar]=useState(true);
    const mostrar =()=>{
        console.log(info)
        setOcultar(!ocultar)
    }

    const ocultarInfo=()=>{
        setOcultar(true)
    }
    
    return (
        <div id="card-container" className="my-5 d-flex card-container">
            <div className="card">
                <img src={info.image} alt=""/>
                <h2>{info.name}</h2>
                <button onClick={mostrar} >Now More..</button>
            </div>
            {ocultar == false?
            <div>
                <button className="bg-warning" onClick={ocultarInfo}>X</button>
                <ul className="list-group">
                    <li className="list-group-item">Character Status {info.status}</li>
                    <li className="list-group-item">Species {info.species}</li>
                    <li className="list-group-item">Origin {info.origin.name}</li>
                    <li className="list-group-item">Gender {info.gender}</li>
                </ul>
            </div>:""}
        </div>
    )
}
