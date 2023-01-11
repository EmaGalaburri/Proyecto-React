// import Home from './components/Home/Home';
import Router from "./components/router/Router";
import './App.css';
// import Characters from './components/Characters/Characters';
// import Contact from './components/Contact/Contact';


function App() {
  // return (
  //   <div>
  //     <Home/>
  //     <Characters/>
  //     <Contact/>
  //   </div>
  // );
  return(
    <Router/>
  )
}

export default App;

// -----------** Estados **------------------

// import './App.css';
// import {useEffect, useState} from "react";
// import Titular from './Titular';
// import Lista from './Lista';


// function App() {
//     // let nombre = "Ana"; estado (guarda info y hago que se modifique)
//     // nombre valor inicial: "Ana"; setNombre()
//     let [nombre, setNombre] = useState("Ana"); 
//     // al hacer click en el boton cambiar el nombre de ana a jose

//     // Variables Lista
//     let dato = ["item1", "item2", "item3"]

//     const cambiarNombre =()=>{
//         console.log("se clickeo el boton")
//         // nombre = "Jose"
//         // uso el setter para cambiar el valor actual del estado
//         if(nombre === "Ana"){
//             setNombre("Jose")
//         } else {
//             setNombre("Romi")
//         } if(nombre === "Romi"){
//           setNombre("Ana")
//         }
//     }

//     // Hook que nos permite ejecutar fx en distintos momentos del ciclo de vida del componente
//     useEffect(()=>{
//       console.log("Se cargo/actualizo el componente")
//     },[])
    
//     // Este console.log solo se ejecuta cuando nota que el estado nombre se modifico 
//     useEffect(()=>{
//       console.log("El estado nombre se modifico")
//     },[])

//     return ( // componente
//     <div className="App">
//         <h1>Hola soy un titulo</h1>

//         <Titular nombrePersona={nombre}/> 
        
//         <button className="btn btn-success" onClick={cambiarNombre}>{nombre}</button>

//         <Lista infoItems={dato}/>  
//     </div>
//   );
// }

// export default App;
