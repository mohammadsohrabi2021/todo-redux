import { Button, Grid } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCardItem, updateCardItem } from '../redux/reducer/Reducer';


function Form({ update, setUpdate, FormStatus, setFormStatus }) {

    const dispatch = useDispatch()
    const colors = [
        {
            colorname: '#937DC2'
        },
        {
            colorname: '#C689C6'
        },
        {
            colorname: '#32CD32'
        },
        {
            colorname: '#FF4500'
        },
        {
            colorname: '#9ACD32'
        },
        {
            colorname: '#EE82EE'
        },
        {
            colorname: '#FFFF00'
        },
        {
            colorname: '#808000'
        },
    ]
    const handleChange = e => {
        setFormStatus({ ...FormStatus, [e.target.name]: e.target.value })
    }
    const handleSubmit = event => {
        event.preventDefault()
        if (update === 'add') {
            dispatch(addCardItem({ ...FormStatus, id: Math.floor(Math.random() * 1000) }))

        } else {
            dispatch(updateCardItem(FormStatus))
        }
        setFormStatus({
            id: Math.floor(Math.random() * 1000),
            title: '',
            description: '',
        })
        setUpdate('add')
    }
    const handleColor = (colorName) => {
        setFormStatus({ ...FormStatus, color: colorName })
    }
    return (
        <Grid>
            <form onSubmit={handleSubmit}>
                <Grid>
                    <input type="text" name='title' value={FormStatus.title} onChange={handleChange} placeholder='title ...' />
                    <input type="text" name='description' value={FormStatus.description} onChange={handleChange} placeholder='description ...' />
                    {colors.map(color => (
                        <Grid>
                            {/* <h5>{color.name}</h5> */}
                            <Grid style={{ width: "30px", height: '30px', borderRadius: '50%', background: color.colorname, border: FormStatus.color === color.colorname ? '1px solid #000' : 'unset' }} onClick={() => handleColor(color.colorname)} />
                        </Grid>
                    ))}
                    <Button variant='contained' type='submit'>
                        {update === 'add' ? 'add' : 'Update'}
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
}

export default Form;