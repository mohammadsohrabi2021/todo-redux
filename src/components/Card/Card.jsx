import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCardItem, checkCardItem } from '../redux/reducer/Reducer';

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
        <div>
            <div>
                <input className='input-search' value={search} onChange={handleSearch} placeholder='Search New User...' />
            </div>
            {DataTodos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())).map(todo =>
                <div key={todo.id}>
                    <div>
                        <h3>{todo.id}</h3>
                        <h3>{todo.name}</h3>
                        <h3>{todo.lastName}</h3>
                        <h3 onClick={() => handelCheck(todo.id)} style={{ cursor: 'pointer' }}>
                            {todo.state ? 'Favorite' : ' unFavorite'}
                        </h3>
                    </div>
                    <div>
                        <button onClick={() => handleDelet(todo.id)}>
                            delete
                        </button>
                        <button onClick={() => handleUpdate(todo)}>
                            update
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}

export default Card;