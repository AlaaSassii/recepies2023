import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { recipes } from "../types/meals";
import axios, { AxiosResponse } from "axios";
import type { PayloadAction } from '@reduxjs/toolkit'


type initialStateType = {
    recipes: recipes | undefined | null,
    loading: boolean,
    error: string,
    name: string,
}

const initialState: initialStateType = {
    recipes: undefined,
    loading: false,
    error: '',
    name: '',
}

export const getRecepies = createAsyncThunk('recepies', async (name: string) => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

const recepiesSlice = createSlice({
    name: 'recepies',
    initialState,
    reducers: {
        changeName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecepies.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getRecepies.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload.meals;
                state.error = '';
            })
            .addCase(getRecepies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    }
})

export const { changeName } = recepiesSlice.actions;
export default recepiesSlice.reducer