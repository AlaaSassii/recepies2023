import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { recepiesCuisineType } from "../types/recepiesCuisineType";
import type { PayloadAction } from '@reduxjs/toolkit'

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

export const getRecepiesByCategory = createAsyncThunk('recepies/categories', async (name: string) => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

const recepiesByCategoriesSlice = createSlice({
    name: 'recepiesCategory',
    initialState,
    reducers: {
        changeSearchValue(state, action: PayloadAction<React.ChangeEvent<HTMLInputElement>>) {
            state.valueSearch = action.payload.target.value
        },
        getSearchValue(state, action: PayloadAction<string>) {
            state.valueSearch = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecepiesByCategory.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getRecepiesByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.recepies = action.payload.meals;
                state.error = '';
            })
            .addCase(getRecepiesByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    }
})

export default recepiesByCategoriesSlice.reducer
export const { changeSearchValue, getSearchValue } = recepiesByCategoriesSlice.actions
