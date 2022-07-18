import {combineReducers, configureStore} from "@reduxjs/toolkit";
import RequestFieldSlice from "./Slice";

const rootReducer = combineReducers({
    RequestField: RequestFieldSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store