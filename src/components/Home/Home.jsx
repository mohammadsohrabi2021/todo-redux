import React, {useState} from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
function Home() {
    const [update, setUpdate] = useState('add')
    const [FormStatus, setFormStatus] = useState({
        id: Math.floor(Math.random() * 1000),
        name: '',
        lastName: '',
        state: false
    })
    return (
        <div>
            <Form update={update} setUpdate={setUpdate} FormStatus={FormStatus} setFormStatus={setFormStatus} />
            <Card setUpdate={setUpdate} setFormStatus={setFormStatus} />
        </div>
    );
}

export default Home;