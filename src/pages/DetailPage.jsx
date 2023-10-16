import React from 'react'
import { useState, useEffect } from 'react';
import CardUser from '../components/CardUser/CardUser';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  
    let {id} = useParams()
    
        const [det, setDet] = useState([]);
        
        useEffect (() => {
      
      fetch(`./productos.json/${id}`).then((res) => res.json() )
      .then((dato) => setDet(dato))
      
        }),[id]
        
  
  
    return (
    <div>
    {det.id? <CardUser det = {det}/>: null}
    </div>
  )
}

export default DetailPage