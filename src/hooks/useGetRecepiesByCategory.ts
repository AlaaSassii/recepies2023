import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector";
import { getRecepiesByCategory } from "../redux/recepiesByCategoriesSlice";
export const useGetRecepieByCategory = () => {
    const dispatch = useAppDispatch();
    const { recepies, loading, error } = useAppSelector(state => state.recepiesByCategory)
    const getRecepie = (category: string) => { dispatch(getRecepiesByCategory(category)) }
    return { recepies, loading, error, getRecepie }
}