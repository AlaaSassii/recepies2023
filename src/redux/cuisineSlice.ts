import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { categories } from "../types/categoriesType";
import { areas } from "../types/areaType";
import { ingredientType, ingredients } from "../types/ingredientType";

type initialStateType = {
    category: {
        value: categories | undefined,
        loading: boolean,
        error: string,
    },
    area: {
        value: areas | undefined,
        loading: boolean,
        error: string,
    },
    ingredient: {
        value: ingredients | undefined,
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