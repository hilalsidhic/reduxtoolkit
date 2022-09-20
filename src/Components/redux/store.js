//store redux toolkit 
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cart";
const store = configureStore({
    reducer: {
        cart: counterReducer,
    },
});
export default store;