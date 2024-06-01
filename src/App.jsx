
import React from "react"
import { Box, Container, Grid } from '@mui/material';
import { NavBar } from "./components/NavBar";
import { ProductoGalleria } from "./components/ProductoGalery";
import { ProductoDetalle } from "./components/ProductoMuestra";

function App() {


  return (
    <>
      <NavBar />
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        minHeight="100vh"
        sx={{ backgroundColor: 'white' }} >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} >
              <ProductoGalleria />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductoDetalle/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};


export default App
