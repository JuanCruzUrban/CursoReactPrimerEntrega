
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardUser = ({el}) =>  {

  const {id, producto, precio, tipo, img} = el;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image= {img}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Producto: {producto}
        </Typography>
        <Typography>
         Precio:{precio}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}



export default CardUser



























  