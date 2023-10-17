import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { recepiesCuisineType } from "../types/recepiesCuisineType";


type initialStateType = {
    recepies: recepiesCuisineType | undefined,
    loading: boolean,
    error: string,
    name: string,
}

const initialState: initialStateType = {
    recepies: undefined,
    loading: false,
    error: '',
    name: '',
}

export const getCategoriesRecepies = createAsyncThunk('recepies/categories', async (name: string) => {
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
    name: 'recepiesCategory',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesRecepies.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getCategoriesRecepies.fulfilled, (state, action) => {
                state.loading = false;
                state.recepies = action.payload.meals;
                state.error = '';
            })
            .addCase(getCategoriesRecepies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    }
})

export default recepiesSlice.reducer