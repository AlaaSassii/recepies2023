import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getIngredientRecepies } from "../redux/recepiesByIngredientsSlice";

export const useGetRecepieByCategory = () => {
    const dispatch = useAppDispatch();
    const { recepies, loading, error } = useAppSelector(state => state.recepiesByIngredient)
    const getRecepie = (ingredient: string) => { dispatch(getIngredientRecepies(ingredient)) }
    return { recepies, loading, error, getRecepie }
}