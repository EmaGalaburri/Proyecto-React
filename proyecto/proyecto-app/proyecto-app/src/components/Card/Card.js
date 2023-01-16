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
            <div className="more-info p-5 flex-column align-items-center ch1 card">
                <button className="btn btn-active d-flex align-self-end m-2" onClick={ocultarInfo}>X</button>
                <ul className="list-group">
                    <li className="list-group-item p-3 fw-bold card">Character Status {info.status}</li>
                    <li className="list-group-item p-3 fw-bold card">Species {info.species}</li>
                    <li className="list-group-item p-3 fw-bold card">Origin {info.origin.name}</li>
                    <li className="list-group-item p-3 fw-bold card">Gender {info.gender}</li>
                </ul>
            </div>:""}
        </div>
    )
}
