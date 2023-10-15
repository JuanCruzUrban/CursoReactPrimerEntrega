import { useState, useEffect } from "react"
import "./ListInstruments.css"

import CardUser from "../CardUser/CardUser";


const ListInstruments = () => {
  
  const [ins, setIns] = useState([]);
  
  useEffect (() => {

fetch("./productos.json").then((res) => res.json() )
.then((datos) => setIns(datos))

  })
  
    return (
   
<div>
 {ins.map((el)=>{

return(
    <CardUser key = {el.id} el = {el}/>
)

})}             
</div>
  
  
  )
}

export default ListInstruments