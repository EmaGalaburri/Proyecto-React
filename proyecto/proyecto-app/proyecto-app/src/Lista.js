// nuevo componente Lista
export default function Lista ({infoItems}) {
    // const mostrar =()=>{
    //     console.log(infoItems)
    // }
    return(
        <ul className="my-4">
                {infoItems.map((itemDelArray)=>{
                    return <li key={itemDelArray}>{itemDelArray}</li>
                })} {/*si voy a escribir JS dentro del return, lo tengo que hacer dentro de llaves {}*/}
            {/* <li>item</li>
            <li>item</li> */}
        </ul>
    )
}