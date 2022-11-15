import React, { useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
import { Grid, Typography, Container } from '@mui/material';
import './HomeStyle.css'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Footer from '../footer/Footer'


import image from '../../assets/image/photo6019226439066435666.jpg'
function Home() {
    const [update, setUpdate] = useState('add')
    const [FormStatus, setFormStatus] = useState({
        id: Math.floor(Math.random() * 1000),
        title: '',
        description: '',
        state: false
    })
    return (
        <>
            <Grid container justifyContent={'center'} xs={12} >
                <Grid xs={12} item display={'flex'} py={3} justifyContent={'center'} >
                    <AppBar mb={20}
                        position="fixed"
                        sx={{
                            zIndex: 1300,
                            width: '100%'
                        }}
                    >
                        <Container>
                            <Toolbar>
                                <Typography variant="h5" component={"h1"} color={'#fff'}>
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
                <Grid item p={1} width={'100%'}>
                    <Form update={update} setUpdate={setUpdate} FormStatus={FormStatus} setFormStatus={setFormStatus} />
                    <Card setUpdate={setUpdate} setFormStatus={setFormStatus} />
                </Grid>
            </Grid>
            <Grid  className='footer'>
                <Footer />
            </Grid>
        </>
    );
}

export default Home;