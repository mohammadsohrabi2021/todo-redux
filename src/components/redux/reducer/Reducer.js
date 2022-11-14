
import { createSlice } from "@reduxjs/toolkit";
const initialState = [

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