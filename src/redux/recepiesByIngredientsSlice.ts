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

export const getIngredientRecepies = createAsyncThunk('recepies/ingredient', async (name: string) => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

const recepiesByIngredientsSlice = createSlice({
    name: 'recepiesIngredient',
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
            .addCase(getIngredientRecepies.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getIngredientRecepies.fulfilled, (state, action) => {
                state.loading = false;
                state.recepies = action.payload.meals;
                state.error = '';
            })
            .addCase(getIngredientRecepies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    }
})

export default recepiesByIngredientsSlice.reducer
export const { changeSearchValue, getSearchValue } = recepiesByIngredientsSlice.actions
