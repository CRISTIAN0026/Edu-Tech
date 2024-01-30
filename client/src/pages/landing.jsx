import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Landing() {
    let navigate = useNavigate();

  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', with: '90vh'}}>
    <Paper 
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5fcff',
        width: '100vh',
        height: '50vh', // Opcional: para centrar verticalmente en toda la altura de la ventana
      }}
    elevation={3}>
      <Box
      >
        <Typography variant="h1" style={{ fontWeight:'bold', color:'#fd531e' }}>kuepa <Typography variant="h2" style={{color:"black"}}>Edu Tech</Typography></Typography>
        <Typography variant="h8">Innovamos en la forma en que estudias</Typography>
        <Box sx={{
            display:'flex',
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'20px'
        }}>
        <Button  style={{ textTransform: 'none' }} variant="contained" onClick={() => navigate("/login")}>Ingresar al aula</Button>
        </Box>
      </Box>
      </Paper>
    </Box>
  );
}

export default Landing;
