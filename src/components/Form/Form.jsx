import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCardItem, updateCardItem } from '../redux/reducer/Reducer';
import './Form.mudole.css'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
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
        <Grid container justifyContent={'center'} alignItems={'center'} dir={'rtl'}>
            <form onSubmit={handleSubmit}>
            <Grid container maxWidth={'600px'} spacing={3} p={2} >
                    <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                        <TextField name={'title'} value={FormStatus.title} onChange={handleChange} required sx={{
                            width: '80%',
                           
                        }} label="موضوع" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} my={1} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                        <TextField name={'description'} value={FormStatus.description} onChange={handleChange} required
                            sx={{
                                width: '80%',
                            }}
                            label="توضیحات" variant="outlined" />
                    </Grid>
                    <Grid xs={12} my={4} display={"flex"} justifyContent={'center'} alignItems={'center'}  flexWrap={'wrap'}  height={'100px'} >
                        {colors.map(color => (
                            <Grid p={3}   width={{sm:'100px',xs:'80px',md:'100px',lg:"100px"}} >
                                <Grid sx={{ width: "30px",cursor:'pointer', height: '30px', borderRadius: '50%', background: color.colorname, border: FormStatus.color === color.colorname ? '1px solid #000' : 'unset' }} onClick={() => handleColor(color.colorname)} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} mt={2} mr={6}>
                        <Button variant='contained' type='submit' xs={12} >
                            {update === 'add' ?
                                'اضافه کردن' : "ثبت ویرایش"}
                        </Button>
                  </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default Form;