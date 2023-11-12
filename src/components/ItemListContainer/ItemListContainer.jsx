import React from 'react'
import ListInstruments from '../ListInstruments/ListInstruments'
import "./ItemListContainer.css"
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CardInstrument from "../CardInstruments/CardInstruments"


const ItemListContainer = () => {
  
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    const getInstrumentos = async () => {
      const q = query(collection(db, "instrumentos"));
     const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
         docs.push({...doc.data(), id: doc.id})
      });
      setInstruments(docs)
    };
    getInstrumentos();
  }, []);
  
  
  return (
    <div className="contenedorTarjetas">
          {instruments.map((instrument) => {

return <CardInstrument key = {instrument.id} instrument = {instrument}/>

          })}
        </div>
  )
}

export default ItemListContainer