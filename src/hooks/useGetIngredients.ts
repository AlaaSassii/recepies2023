import { useEffect } from 'react'
import { getIngredients } from "../redux/cuisineSlice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector";
const useGetIngredients = () => {
    const dispatch = useAppDispatch();
    const { error, loading, value } = useAppSelector(state => state.cuisine.ingredient);
    useEffect(() => {
        dispatch(getIngredients())
    }, [])
    return { value, loading, error }
}

export default useGetIngredients;