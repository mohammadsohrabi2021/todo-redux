import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography, Container, Button } from '@mui/material';
import image from '../../../assets/image/photo6019226439066435666.jpg'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Grid mb={3} xs={12} item display={'flex'} py={3} justifyContent={'center'} >
                    <AppBar mb={20}
                        position="fixed"
                        sx={{
                            zIndex: 1300,
                            width: '100%'
                        }}
                    >
                        <Container>
                            <Toolbar>
                                <Typography display={'flex'} gap={1} variant="h5" component={"h1"} color={'#fff'}>
                                    {"Todo App"}
                                  
                                </Typography>

                                <Box display={"flex"} flexGrow={1} justifyContent="end">
                                    <IconButton>
                                        <Avatar>
                                            <img src={image} width={'36px'} />
                                        </Avatar>
                                    </IconButton>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Grid>
    );
};

export default Header;