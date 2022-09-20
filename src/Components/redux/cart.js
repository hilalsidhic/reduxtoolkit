//createslice
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartList:[],
    counter: 0,
};
export const CounterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment(state,action) {
            state.cartList.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.count+=1;
                }   
            });
        },
        decrement(state,action) {
            state.cartList.forEach((item) => {
                if (item.id === action.payload.id) {
                    if(item.count==1){
                        //remove from the array
                        state.cartList = state.cartList.filter((item) => item.id !== action.payload.id);
                    }
                    else{
                        item.count-=1;
                    }
                }   
            });
        },
        AddtoCart:(state,action)=>{
            state.cartList.push({
                ...action.payload,
                count: 1,
            });
        },
    },
});

export const {increment, decrement, AddtoCart} = CounterSlice.actions;
// export const { increment, decrement, incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer;
