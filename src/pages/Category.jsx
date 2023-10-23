import React from 'react'
import { useState, useEffect } from 'react';
import CardUser from '../components/CardUser/CardUser';
import { useParams } from 'react-router-dom';

const Category = () => {
 
 const [ins, setIns] = useState([]);
  
 let { categoryId } = useParams()
 
 console.log(categoryId)


let filterInstrumentos = ins.filter((ins) => {

    return ins.tipo === categoryId

})

 useEffect (() => {

    fetch("../../productos.json").then((res) => res.json() )
    .then((datos) => setIns(datos))
    
      },[])
 
 
 
      return (
        <div >
          {filterInstrumentos.map((el) => {
            return (
              <div  key={el.id}>
                <CardUser el={el} />
              </div>
            );
          })}
        </div>
      );
}

export default Category