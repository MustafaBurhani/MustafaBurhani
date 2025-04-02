import { createSlice } from "@reduxjs/toolkit";
import { todoListSlice } from "./todoListSlice";


const initialState = [];
const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        setInitialData(state, action) {
            return state = action.payload
        },
        addUser(state, action) {
            state.push(action.payload);
            window.localStorage.setItem('usersListData', JSON.stringify(state));
        },
        deleteUser(state, action) {
            state.splice(action.payload, 1);
            window.localStorage.setItem('usersListData', JSON.stringify(state));
        },
        deleteAllUser() {
            window.localStorage.setItem('usersListData', JSON.stringify([]));
            return [];
        },
        updateUser(state, action) {
            state.splice(action.payload.index, 1, action.payload.data);
            window.localStorage.setItem('usersListData', JSON.stringify(state));
        }
    },
    extraReducers(builder) {
        builder.addCase(todoListSlice.actions.deleteAllItem(), () => {
            // Perform action when deleteAllItem reducer called in todoListSlice
            console.log('extraReducers deleteAllItem called');
        });
    }


});

export { userSlice };
export const { setInitialData, addUser, deleteUser, deleteAllUser, updateUser } = userSlice.actions;