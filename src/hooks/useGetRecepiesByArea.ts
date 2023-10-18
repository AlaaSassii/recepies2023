import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getAreaRecepies } from "../redux/recepiesByAreaSlice";
import { changeSearchValue, getSearchValue } from "../redux/recepiesByAreaSlice";

export const useGetRecepiesByArea = () => {
    const dispatch = useAppDispatch();
    const { recepies, loading, error, valueSearch } = useAppSelector(state => state.recepiesByArea)
    const getRecepie = (area: string) => { dispatch(getAreaRecepies(area)) }
    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchValue(e))
    }
    const getSearchValueFunction = (value: string) => { dispatch(getSearchValue(value)) }
    return { recepies, loading, error, getRecepie, valueSearch, handleSearchValueChange, getSearchValueFunction }
}