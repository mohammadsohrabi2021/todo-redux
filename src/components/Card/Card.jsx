import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCardItem, checkCardItem } from '../redux/reducer/Reducer';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Card({ setUpdate, setFormStatus }) {
    const DataTodos = useSelector(state => state.ToDo)
    const dispatch = useDispatch()

    const handleDelet = (id) => {
        dispatch(deleteCardItem(id))
    }
    const handleUpdate = (todo) => {
        setFormStatus(todo)
        setUpdate('update')
    }
    const handelCheck = (id) => {
        dispatch(checkCardItem(id))
    }
    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value)
    }

    return (
        <Grid>
            <Grid>
                <input value={search} onChange={handleSearch} placeholder='Search New Todo...' />
            </Grid>
            {DataTodos.filter(todo => todo.title.toUpperCase().includes(search.toUpperCase())).map(todo =>
                <Grid key={todo.id}>
                    <Grid style={{background:todo.color,opacity:todo.compeleted? '0.5': 'unset'}} >
                        <Typography variant='h4'>{todo.id}</Typography>
                        <Typography variant='h4'>{todo.title}</Typography>
                        <Typography variant='h4'>{todo.description}</Typography>
                        <Typography variant='h4' onClick={() => handelCheck(todo.id)} style={{ cursor: 'pointer' }}>
                            {todo.state ? 'yes' :'no'}
                        </Typography>
                    </Grid>

                    <Grid>
                        <Button variant='outlined' onClick={() => handleDelet(todo.id)}>
                            <DeleteIcon />
                        </Button>
                        <Button variant='outlined' onClick={() => handleUpdate(todo)}>
                            <EditIcon />
                        </Button>
                    </Grid>

                </Grid>

            )}
        </Grid>
    );
}

export default Card;