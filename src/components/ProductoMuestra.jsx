import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

export function ProductoDetalle() {
  
  const [cantidad, setCantidad] = useState(0);

 
  const agregarAlCarrito = () => {
    setCantidad(cantidad + 1);
  };

  
  const quitarDelCarrito = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <Box ml={'50px'}>
      <Typography variant="h3" component="div" gutterBottom>
        Fall Limited Edition Sneakers
      </Typography>
      <Typography variant="body1" gutterBottom>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        $125.00 <span style={{ textDecoration: 'line-through', color: 'gray' }}>$250.00</span> <span style={{ color: 'red' }}>50%</span>
      </Typography>
      <Paper elevation={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 4, p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
         
          <Button style={{color: 'orange', fontSize: '32px'}} onClick={quitarDelCarrito}>-</Button>
          <Typography variant="body1" sx={{ mx: 2, color: 'black', fontSize: '20px'  }}>{cantidad}</Typography>
          <Button style={{color: 'orange', fontSize: '32px'}} onClick={agregarAlCarrito}>+</Button>
        </Box>
        
        <Button variant="contained" style={{ backgroundColor: 'orange', color: 'black' }} onClick={agregarAlCarrito}>Add to cart</Button>
      </Paper>
    </Box>
  );
};
