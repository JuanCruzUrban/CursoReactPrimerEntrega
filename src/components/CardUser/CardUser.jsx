import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./CardUser.css"
const CardUser = ({el}) =>  {

  const {id, producto, precio, tipo} = el;

  return (
    
    <div className='divCar'>
      <h2>"id:" {id}</h2>
      <h3>"Instrumento" {producto}</h3>
     <p>"Precio $"{precio}</p> 
      <p>"Tipo de Instrumento:" {tipo}</p>
    </div>

      

  );
}

export default CardUser