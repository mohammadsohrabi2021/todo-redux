import React, {useState} from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
import { Grid } from '@mui/material';
function Home() {
    const [update, setUpdate] = useState('add')
    const [FormStatus, setFormStatus] = useState({
        id: Math.floor(Math.random() * 1000),
        title: '',
        description: '',
        state: false
    })
    return (
        <Grid>
            <Form update={update} setUpdate={setUpdate} FormStatus={FormStatus} setFormStatus={setFormStatus} />
            <Card setUpdate={setUpdate} setFormStatus={setFormStatus} />
        </Grid>
    );
}

export default Home;