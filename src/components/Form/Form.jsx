import React from 'react';
import { useDispatch } from 'react-redux';
import { addCardItem, updateCardItem } from '../redux/reducer/Reducer';
import styles from './Form.module.scss'

function Form({ update, setUpdate, FormStatus, setFormStatus }) {

    const dispatch = useDispatch()
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
            name: '',
            lastName: '',
        })
        setUpdate('add')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.container}>
                <div className={styles.form}>
                    <input type="text" name='name' value={FormStatus.name} onChange={handleChange} placeholder='name ...' />
                    <input type="text" name='lastName' value={FormStatus.lastName} onChange={handleChange} placeholder='lastName ...' />
                    <button type='submit' className='btn btn-success button'>
                        {update === 'add' ? 'add' : 'Update'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;