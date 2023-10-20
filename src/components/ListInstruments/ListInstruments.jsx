import { useState, useEffect } from "react"
import "./ListInstruments.css"
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";

const ListInstruments = () => {
  
  const [ins, setIns] = useState([]);
  
  useEffect (() => {

fetch("../../../productos.json").then((res) => res.json() )
.then((datos) => setIns(datos))

  }),[]
  
    return (
   
<div className="divInstrumento">
 {ins.map((el)=>{

return(
<div className="divInstr" key = {el.id}>
<Link to={`/DetailPage/${el.id}`}>
<CardUser  el = {el}/>
</Link>
</div>
)

})}             
</div>
  
  
  )
}

export default ListInstruments