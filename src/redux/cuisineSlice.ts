import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { categoriesType } from "../types/categoriesType";
import { areasType } from "../types/areaType";
import { ingredientsType } from "../types/ingredientType";

type initialStateType = {
    category: {
        value: categoriesType | undefined,
        loading: boolean,
        error: string,
    },
    area: {
        value: areasType | undefined,
        loading: boolean,
        error: string,
    },
    ingredient: {
        value: ingredientsType | undefined,
        loading: boolean,
        error: string,
    }

}

const initialState: initialStateType = {
    category: {
        value: undefined,
        loading: false,
        error: '',
    },
    area: {
        value: undefined,
        loading: false,
        error: '',
    },
    ingredient: {
        value: undefined,
        loading: false,
        error: '',
    },
}

export const getCategories = createAsyncThunk('categories', async () => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

export const getAreas = createAsyncThunk('areas', async () => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

export const getIngredients = createAsyncThunk('areas', async () => {
    try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
        const response: AxiosResponse = await axios.get(apiUrl);
        return response.data
    }
    catch (error) {
        throw error
    }
})

const cuisineSlice = createSlice({
    name: 'cuisine',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.category.loading = true;
                state.category.error = '';
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.category.loading = false;
                state.category.value = action.payload.meals;
                state.category.error = '';
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.category.loading = false;
                state.category.error = action.error.message || 'An error occurred.';
            })

            .addCase(getAreas.pending, (state) => {
                state.area.loading = true;
                state.area.error = '';
            })
            .addCase(getAreas.fulfilled, (state, action) => {
                state.area.loading = false;
                state.area.value = action.payload.meals;
                state.area.error = '';
            })
            .addCase(getAreas.rejected, (state, action) => {
                state.area.loading = false;
                state.area.error = action.error.message || 'An error occurred.';
            })

            .addCase(getIngredients.pending, (state) => {
                state.ingredient.loading = true;
                state.ingredient.error = '';
            })
            .addCase(getIngredients.fulfilled, (state, action) => {
                state.ingredient.loading = false;
                state.ingredient.value = action.payload.meals;
                state.ingredient.error = '';
            })
            .addCase(getIngredients.rejected, (state, action) => {
                state.ingredient.loading = false;
                state.ingredient.error = action.error.message || 'An error occurred.';
            })
    }

})

export default cuisineSlice.reducer