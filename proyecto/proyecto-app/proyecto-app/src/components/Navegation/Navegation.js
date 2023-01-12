import { Link } from "react-router-dom"
import "./Navegation.css"

export default function Navegation() {
    return(
        <header>
            <nav className='navbar navbar-expand-lg  w-100'>
                <div className='container'>
                    <h1 className='name'>Rick & Morty</h1>
                    <ul className='d-flex flex-row navbar-nav nav-pills'>
                        <li className="mx-2 nav-item"><Link to="/" className="btn btn-primary title">Home</Link></li>
                        <li className="mx-2 nav-item"><Link to="/characters" className="btn btn-primary title">Characters</Link></li>
                        <li className="mx-2 nav-item"><Link to="/contact" className="btn btn-primary title">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}