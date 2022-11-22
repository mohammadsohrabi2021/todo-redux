import { Container, Grid, Typography } from "@mui/material";
import React from "react";



const Footer = () => {
  return (
   <Grid sx={{textAlign:'center',height:'50px',bgcolor:'#1976D2', position:'fixed',width:'100%',bottom:'0'}}>
     <footer>
      <Container>
        <Typography sx={{lineHeight:'50px',color:'#fff',fontWeight:'bold'}}>&copy; All Rights Reserved 2022</Typography>
      </Container>
    </footer>
   </Grid>
  );
};

export default Footer;
