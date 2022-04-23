
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material';


export default function Header() {

  const darkTheme = createTheme({
    palette: { 
      primary:{
        main:'#424353',
      },
      type:'dark',
      
    },
  });  

  const navigate= useNavigate();
  return (
   <ThemeProvider theme={darkTheme}>
    <AppBar >
<Container>
          <Toolbar>
            <Typography style={{color:"#29D7B9 ", forntFamil:'Montserrate', fontWeight:'bold'}}
              onClick={() => navigate("/")}
              variant="h6"
            >Crypto-Hasher
            </Typography>
    </Toolbar>
        </Container>
   </AppBar>
 </ThemeProvider>

  )
}
