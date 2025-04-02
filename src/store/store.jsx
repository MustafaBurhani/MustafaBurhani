import { configureStore } from "@reduxjs/toolkit";

import { todoListSlice } from "./slices/todoListSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
        users: userSlice.reducer
    }
});

export default store;