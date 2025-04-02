import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {
        setInitialData(state, action) {
            window.localStorage.setItem('todoListData', JSON.stringify(action.payload));
            return state = action.payload;
        },
        addItem(state, action) {
            state.push(action.payload);
            window.localStorage.setItem('todoListData', JSON.stringify(state));
        },
        removeItem(state, action) {
            state.splice(action.payload, 1);
            window.localStorage.setItem('todoListData', JSON.stringify(state));
        },
        deleteAllItem() {
            window.localStorage.setItem('todoListData', JSON.stringify([]));
            // return state = []; // This is not right way to delete from state
            return []; // This is the right way to delete from state
        }
    }
});

export { todoListSlice };
export const { setInitialData, addItem, removeItem, deleteAllItem } = todoListSlice.actions;