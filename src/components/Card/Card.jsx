import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCardItem, checkCardItem } from '../redux/reducer/Reducer';
import styles from './Card.module.scss'
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
            <div style={{textAlign:'center'}}>
                <input  value={search} onChange={handleSearch} placeholder='Search New User...' />
            </div>
            {DataTodos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())).map(todo =>
                <div className={styles.container} >
                    <div class="card-body" >
                        <div key={todo.id} className={styles.card}>
                            <img style={{ width: '50px' }} src={`https://avatars.dicebear.com/api/avataaars/:${todo.id}.svg`} alt="avatar" />
                            <div className={styles.title}>
                                <h4>{todo.id}</h4>
                                <h4>{todo.name}</h4>
                                <h4>{todo.lastName}</h4>
                                <h4 onClick={() => handelCheck(todo.id)} style={{ cursor: 'pointer' }}>
                                    {todo.state ? <i class="fa-regular fa-thumbs-up"></i> : <i class="fa-regular fa-thumbs-down"></i>}
                                </h4>
                            </div>

                            <div className={styles.action}>
                                <button className='btn btn-danger m-2' onClick={() => handleDelet(todo.id)}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                                <button className='btn btn-info m-2' onClick={() => handleUpdate(todo)}>
                                    <i class="fa-solid fa-user-pen"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Card;