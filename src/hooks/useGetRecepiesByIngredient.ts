import React from 'react'
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getIngredientRecepies } from "../redux/recepiesByIngredientsSlice";
import { changeSearchValue, getSearchValue } from "../redux/recepiesByIngredientsSlice";

export const useGetRecepieByIngredient = () => {
    const dispatch = useAppDispatch();
    const { recipes: recepies, loading, error, valueSearch } = useAppSelector(state => state.recepiesByIngredient)
    const getRecepie = (ingredient: string) => { dispatch(getIngredientRecepies(ingredient)) }
    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchValue(e))
    }

    const getSearchValueFunction = (value: string) => { dispatch(getSearchValue(value)) }
    return { recepies, loading, error, getRecepie, valueSearch, handleSearchValueChange, getSearchValueFunction }
}