import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getAreaRecepies } from "../redux/recepiesByAreaSlice";

export const useGetRecepiesByArea = () => {
    const dispatch = useAppDispatch();
    const { recepies, loading, error } = useAppSelector(state => state.recepiesByArea)
    const getRecepie = (area: string) => { dispatch(getAreaRecepies(area)) }
    return { recepies, loading, error, getRecepie }
}