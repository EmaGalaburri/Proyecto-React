import { Fragment } from "react"

import Navegation from "../Navegation/Navegation"

// import {useState} from "react";

export default function Contact(){
// Formulario no controlado

    return(
        <Fragment>
            <Navegation/>
            <section>
                <h2>Contact</h2>
                <h3>Leave us your information so we can contact you</h3>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nombre"/>
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>

                    
                    <div className="col-12">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea id="mensaje" className="form-control"></textarea>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sing in</button>
                    </div>

                </form>
            </section>
        </Fragment>
        
    )
}

// Reutilizamos el componente navegation que creamos anteriormente, aprovechando que en ambas paginas se utilizan (characters y contact) 
// onBlur --> evento que se ejecuta cuando hice click en algo y despues me lleva a ese lugar 