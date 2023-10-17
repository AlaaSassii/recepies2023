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