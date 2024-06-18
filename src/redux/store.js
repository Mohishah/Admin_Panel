import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducers";

// const store = createStore(rolesReducer, applyMiddleware(thunk))
const store = configureStore({
    reducer:{
        userReducer
    },
})

export default store