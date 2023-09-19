import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints, requests } from "../../utility/requests";
import axios from '../../utility/axios';

const initialState= {
    popularMovies:{
        status: "idle",
        error: null,
        data: null
    },
    upcomingMovies: {
        status: "idle",
        error: null,
        data: null
    }
}

export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async () => {
        const response = await axios.get(requests.getMovies(endpoints.popular));
        return response.data
    }
)

export const fetchUpcomingMovies = createAsyncThunk(
    'movie/fetchUpcomingMovies',
    async () => {
        const response = await axios.get(requests.getMovies(endpoints.upcoming));
        return response.data
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPopularMovies?.pending, (state, action)=>{
            state.popularMovies.status = 'loading';
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action)=>{
            state.popularMovies.status = 'success';
            state.popularMovies.data = action.payload;
        })
        .addCase(fetchPopularMovies.rejected, (state, action)=>{
            state.popularMovies.status = 'failed';
            state.popularMovies.error = action.error;
        } )
        .addCase(fetchUpcomingMovies.pending, (state, action)=>{
            state.upcomingMovies.status = 'loading';
        })
        .addCase(fetchUpcomingMovies.fulfilled, (state, action)=>{
            state.upcomingMovies.status = 'success';
            state.upcomingMovies.data = action.payload;
        })
        .addCase(fetchUpcomingMovies.rejected, (state, action)=>{
            state.upcomingMovies.status = 'failed';
            state.upcomingMovies.error = action.error;
        } )
        
    }
});

export const popularMoviesSelector = (state)=>state.movie.popularMovies;
export const upcomingMovieSelector = (state)=>state.movie.upcomingMovies;

export default movieSlice.reducer;