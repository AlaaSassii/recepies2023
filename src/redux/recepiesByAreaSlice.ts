import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { recepiesCuisineType } from "../types/recepiesCuisineType";


type initialStateType = {
    recepies: recepiesCuisineType | undefined,
    loading: boolean,
    error: string,
    valueSearch: string
}

const initialState: initialStateType = {
    recepies: undefined,
    loading: false,
    error: '',
    valueSearch: ''
}

export const getAreaRecepies = createAsyncThunk('recepies/area', async (name: string) => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

const recepiesSlice = createSlice({
    name: 'recepiesArea',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAreaRecepies.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getAreaRecepies.fulfilled, (state, action) => {
                state.loading = false;
                state.recepies = action.payload.meals;
                state.error = '';
            })
            .addCase(getAreaRecepies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    }
})

export default recepiesSlice.reducer