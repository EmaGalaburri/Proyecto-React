import { Link } from "react-router-dom"
// import "./ListItemHome.css"
export default function ListItemHome ({dato, infoPath}){
    
    // const mostrar =()=>{
    //     console.log(info)
    // }

    return(
        <li className="btn btn-success">
            <Link to={infoPath}>{dato}</Link>
        </li>
        // tambien podemos darle otros eventos MouseOver, OnChange
    )
}