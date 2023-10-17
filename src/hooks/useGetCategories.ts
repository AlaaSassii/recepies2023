import { useEffect } from 'react'
import { getCategories } from "../redux/cuisineSlice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector";
const useGetCategories = () => {
    const dispatch = useAppDispatch();
    const { error, loading, value } = useAppSelector(state => state.cuisine.category);
    useEffect(() => {
        if (!value) {
            dispatch(getCategories())
        }
    }, [])
    return { value, loading, error }
}

export default useGetCategories;