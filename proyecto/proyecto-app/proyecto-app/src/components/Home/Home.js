import ListItemHome from "../ListItemHome/ListItemHome";
import "./Home.css";

export default function Home (){
    return(
        <header className='main-container'>
            <div className='main'>  
                    <h1>Proyect - Rick & Morty</h1>
                    <div className='bt-container'>
                        <ul className="nav nav-pills justify-content-center">
                            <ListItemHome className="home-bt" dato="Characters" infoPath="/characters"/>
                            <ListItemHome className="home-bt" dato="Contact" infoPath="/contact"/>
                        </ul>
                    </div>
            </div>
        </header>
    )
}

// <div className='main-container'>
//             <header className='main'>
//                 <h1>Proyecto - Rick & Morty</h1>

//                 <div className='bt-container'>
//                 <button className='home-bt'>Characters</button>
//                 <button className='home-bt'>Contact</button>
//                 </div>
//             </header>

//         </div>
