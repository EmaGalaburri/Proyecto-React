import ListItemHome from "../ListItemHome/ListItemHome";
import "./Home.css";

export default function Home (){
    // Puedo crear un objeto
    // let informacion ={
    //     email: "emagala@gmail.com",
    //     telefono: 11234567
    //}
    return(
        <header className="bg-light">
            <div>
            <h1>Proyect - Rick & Morty</h1>
                <nav className="navbar">
                    <ul className="d-flex justify-content-between">
                        <ListItemHome dato="Characters" infoPath="/characters"/>
                        <ListItemHome dato="Contact" infoPath="/contact"/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
