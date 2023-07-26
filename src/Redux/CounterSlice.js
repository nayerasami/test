import { createSlice } from "@reduxjs/toolkit";


let CounterSlice =createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment:(state,action)=>{
            state.count+=1

        },
        decrement:(state)=>{
state.count-=1
        }
    }
})


export let CounterReducer =CounterSlice.reducer

export let {increment,decrement} =CounterSlice.actions