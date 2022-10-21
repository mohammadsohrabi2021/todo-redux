
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, name: "mohammad", state: false, lastName: 'sohrabi' },
    { id: 2, name: "ali", state: true, lastName: 'sohrabi' },
    { id: 3, name: "reza", state: false, lastName: 'sohrabi' },
    { id: 4, name: "milad", state: true, lastName:'sohrabi' },
]
export const CardSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addCardItem: (state, action) => {
            state.push(action.payload)
        },
        deleteCardItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload)
            state.splice(index, 1)
        },
        updateCardItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            state[index] = action.payload

        },
        checkCardItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload)
            state[index].state = !state[index].state

        },
    }
});

export const { addCardItem, deleteCardItem, updateCardItem , checkCardItem } = CardSlice.actions
export default CardSlice.reducer