import {useState} from "react";
import "./Card.css"

export default function Card({info}) {
    const [ocultar,setOcultar]=useState(true);
    const mostrar =()=>{
        console.log(info) // objeto con la info del personaje
        setOcultar(!ocultar) // cambio de verdadero a falso, nos ayuda a mostrar el contenedor de info
    }

    const ocultarInfo=()=>{
        setOcultar(true) // nos ayuda a ocultar el contenedor de info
    }
    
    return (
    //     <div className="card" style="width: 18rem;">
    //         <img src={info.image} className="card-img-top" alt={info.image}/>
    //         <div className="card-body">
    //         <h5 className="card-title">{info.name}</h5>
    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href={mostrar} className="btn btn-primary">Now More..</a>
    //         {/* <button onClick={mostrar}>Now More..</button> */}
    //         </div>
    //     </div> 
    // )}

        <div className="bg-primary my-5 d-flex">
            <div>
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

        // <div class="primerDiv">
        //     <img src={info.image} alt=""/>
        //     <div class="segundoDiv">
        //         <h2>{info.name}</h2>
        //         <button onClick={mostrar}>Now More..</button>
        //     </div>
        // </div>
    )
}