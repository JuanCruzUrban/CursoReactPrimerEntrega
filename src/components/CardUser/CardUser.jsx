
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardUser = ({el}) =>  {

  const {id, producto, precio, tipo} = el;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        {precio}
       {tipo}
      </CardActions>
    </Card>
  );
}



export default CardUser



























  