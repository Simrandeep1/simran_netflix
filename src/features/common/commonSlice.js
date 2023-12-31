import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requests } from "../../utility/requests";
import axios from '../../utility/axios';

const initialState= {
    headerVideo:{
        status: "idle",
        error: null,
        data: null
    },
    videoDetails: {
        status: "idle",
        error: null,
        data: null
    },
    platform:"",
    searchString: ''
    // videoByGenre:{
    //   status: 'idle',
    //   error: '',
    //   data: null
    // }
}

export const fetchHeaderDetails = createAsyncThunk(
    'common/fetchHeaderDetails',
    async (type) => {
        const response = await axios.get(requests.getVideoDetails(type));
        return response.data
    }
)

export const fetchVideoDetails = createAsyncThunk(
    'common/fetchVideoDetails',
    async (type) => {
        const response = await axios.get(requests.getVideoDetails(type));
        return response.data
    }
)

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        platformAction:(state,action)=>{
            state.platform=action.payload;
        },
        searchQuery: (state, action)=>{
            state.searchString = action.payload
          }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchHeaderDetails.pending, (state, action)=>{
            state.headerVideo.status = 'loading';
        })
        .addCase(fetchHeaderDetails.fulfilled, (state, action)=>{
            state.headerVideo.status = 'success';
            state.headerVideo.data = action.payload;
        })
        .addCase(fetchHeaderDetails.rejected, (state, action)=>{
            state.headerVideo.status = 'failed';
            state.headerVideo.error = action.error;
        } )
        .addCase(fetchVideoDetails.pending, (state, action)=>{
            state.videoDetails.status = 'loading';
        })
        .addCase(fetchVideoDetails.fulfilled, (state, action)=>{
            state.videoDetails.status = 'success';
            state.videoDetails.data = action.payload;
        })
        .addCase(fetchVideoDetails.rejected, (state, action)=>{
            state.videoDetails.status = 'failed';
            state.videoDetails.error = action.error;
        } )
    }
});
export const{platformAction}=commonSlice.actions;
export const { searchQuery } = commonSlice.actions;

export const headerVideoSelector = (state)=>state.common.headerVideo;
export const videoDetailsSelector = (state)=>state.common.videoDetails;
export const platformSelector = (state)=>state.common.platform;

export default commonSlice.reducer;