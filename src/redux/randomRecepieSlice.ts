import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { recepie } from "../types/meals";

type initialStateType = {
    randomRecepie: recepie | undefined,
    loading: boolean,
    error: string,
}

const initialState: initialStateType = {
    randomRecepie: undefined,
    loading: false,
    error: '',
}

export const getRadnomRecepie = createAsyncThunk('recepies', async () => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

const randomRecpieSlice = createSlice({
    name: 'randomRecpie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getRadnomRecepie.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getRadnomRecepie.fulfilled, (state, action) => {
                state.loading = false;
                state.randomRecepie = action.payload.meals;
                state.error = '';
            })
            .addCase(getRadnomRecepie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    }

})

export default randomRecpieSlice.reducer;