import React, { useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
import { Grid} from '@mui/material';
import './HomeStyle.css'




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
               
                <Grid item p={1} width={'100%'}>
                    <Form update={update} setUpdate={setUpdate} FormStatus={FormStatus} setFormStatus={setFormStatus} />
                    <Card setUpdate={setUpdate} setFormStatus={setFormStatus} />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;