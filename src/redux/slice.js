import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    anime:[],
}
const slice = createSlice({
    name:'slice',
    initialState,
    reducers:{
        addAnime:(state, {payload})=>{
            state.anime = payload;
        }
    },
})

export const {addAnime} = slice.actions;
export const getAnime = (state) => state.anime;
export default slice.reducer;