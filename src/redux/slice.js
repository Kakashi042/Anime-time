import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {options} from '../common/AnimeAPI'
import axios from 'axios'

export const fetchAsyncAnime = createAsyncThunk('Anime/fetchAsyncAnime',async()=>{
    try{
        const response = await axios.get(options.url);
        
        return response.data.data;
        }
        catch(error){
          console.log(error)
        }
})

export const fetchAsyncAnimeDetail = createAsyncThunk('Anime/fetchAsyncAnimeDetail',async(mal_id)=>{
    try{
        const response = await axios.get(options.url+`/${mal_id}/full`);
        // console.log(response.data)
        return response.data.data;
        }
        catch(error){
          console.log(error)
        }
})

const initialState = {
    anime:[],
    animeDetail:{}
}
const slice = createSlice({
    name:'slice',
    initialState,
    reducers:{
        addAnime:(state, {payload})=>{
            state.anime = payload;
        }
    },
    extraReducers:{
        [fetchAsyncAnime.pending]:()=>{
            console.log('pending')
        },
        [fetchAsyncAnime.fulfilled]:(state,{payload})=>{
            console.log('Anime Success')
            return {...state, anime:payload}
        },
        [fetchAsyncAnime.rejected]:()=>{
            console.log('Rejected')
        },
        [fetchAsyncAnimeDetail.pending]:()=>{
            console.log('Async pending pending')
        },
        [fetchAsyncAnimeDetail.fulfilled]:(state,{payload})=>{
            console.log('ANime detail Success')
            return {...state, animeDetail:payload}
        },
        [fetchAsyncAnimeDetail.rejected]:()=>{
            console.log('ANime detail Reject')
        }
    }
})

export const {addAnime} = slice.actions;
export const getAnime = (state) => state.anime;
export const getAnimeDetail = (state) => state.animeDetail;

export default slice.reducer;