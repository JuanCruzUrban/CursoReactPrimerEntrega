import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardInstruments.css";

const CardInstrument = ({ instrument }) => {
  return (
    <div className="tarjet">
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia component="img" height="450" image={instrument.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nombre: {instrument.name}
          </Typography>
          <Typography>Precio: ${instrument.price}</Typography>
        </CardContent>
        <Typography>Tipo: {instrument.type}</Typography>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default CardInstrument;
