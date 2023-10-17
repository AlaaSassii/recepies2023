import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { recepies } from "../types/meals";
import axios, { AxiosResponse, AxiosError } from "axios";


type initialStateType = {

    recepies: any,
    loading: boolean,
    error: string,
}