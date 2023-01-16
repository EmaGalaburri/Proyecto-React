import { Fragment } from "react"
import "./Contact.css"
import Navegation from "../Navegation/Navegation"

export default function Contact(){

    return(
        <Fragment>
            <Navegation/>
            <main className="container-fluid main-contact">
                <div className="main-contact-div d-flex flex-column justify-content-center align-item-center m-auto mt-5 w-75 h-75">
                    <section>
                        <h2 className="h-dos">Contact</h2>
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
                                <button type="submit" className="btn">Sing in</button>
                            </div>

                        </form>
                    </section>
                </div>
            </main>
        </Fragment>
        
    )
}