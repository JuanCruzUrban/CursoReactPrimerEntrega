import React from 'react'
import { useState, useEffect } from 'react';
import CardUser from '../components/CardUser/CardUser';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  let { id } = useParams();

  const [det, setDet] = useState([]);  

  useEffect(() => {
    fetch("../../productos.json")
      .then((res) => res.json())
      .then((dato) => setTimeout(() => {
        setDet(dato.filter(prod => prod.id == id)[0])
      }, 2000));
  }, [id]);

  return  (
  
  <div>{det.id ? <CardUser el={det} /> : null}</div>
  
  )


};

export default DetailPage;