import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector";
import { getRecepiesByCategory } from "../redux/recepiesByCategoriesSlice";
import { changeSearchValue } from "../redux/recepiesByCategoriesSlice";
export const useGetRecepieByCategory = () => {
    const dispatch = useAppDispatch();
    const { recepies, loading, error, valueSearch } = useAppSelector(state => state.recepiesByCategory)
    const getRecepie = (category: string) => { dispatch(getRecepiesByCategory(category)) }
    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchValue(e))
    }
    return { recepies, loading, error, getRecepie, valueSearch, handleSearchValueChange }
}