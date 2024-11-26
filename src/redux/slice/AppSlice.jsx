import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading:false
}
export const appSlice = createSlice( {
    name: "app",
    initialState, 
    reducer:{

    },
    extraReducers : () => {
        
    }
})
export const {a} = appSlice.actions

export default appSlice.reducer