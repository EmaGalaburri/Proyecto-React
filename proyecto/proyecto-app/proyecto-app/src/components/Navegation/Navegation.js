import { Link } from "react-router-dom"
import "./Navegation.css"

export default function Navegation() {
    return(
        <header className="d-flex bg-primary">
            <h1>Rick & Morty</h1>
            <nav>
                <ul className="d-flex text-decoration-none">
                    <li className="mx-2"><Link to="/">Home</Link></li>
                    <li className="mx-2"><Link to="/characters">Characters</Link></li>
                    <li className="mx-2"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}