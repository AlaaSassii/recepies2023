import { useEffect } from 'react'
import { getAreas } from "../redux/cuisineSlice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector";
const useGetAreas = () => {
    const dispatch = useAppDispatch();
    const { error, loading, value } = useAppSelector(state => state.cuisine.area);
    useEffect(() => {
        if (!value) {
            dispatch(getAreas())
        }
    }, [])
    return { value, loading, error }
}

export default useGetAreas;