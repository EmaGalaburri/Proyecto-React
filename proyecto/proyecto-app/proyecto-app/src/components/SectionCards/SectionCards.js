import Card from "../Card/Card";
import "./SectionCards.css"

export default function SectionCards({datos}) {

    // let datos = ["Rick","Morty","Infor"]; no uso este array, sino que utilizo estados
    
        
    return (
        <section className="section-cards">
                {datos.map((dato)=>{ return <Card key={dato.id} info={dato}/> })}           
        </section>
    )
}