import { useEffect } from 'react'
import { useDebounce } from './useDebounce';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { changeName, getRecepies } from '../redux/recepiesByNameSlice';

const useSearchRecepieByName = () => {
    const dispatch = useAppDispatch();
    const { recipes, error, loading, name } = useAppSelector(state => state.recepiesName);
    const debouncedSearchTerm = useDebounce(name, 500);
    const handleChangeMealValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(e.target.value))
    }
    useEffect(() => {
        dispatch(getRecepies(debouncedSearchTerm))
    }, [debouncedSearchTerm])
    return { recipes, error, loading, name, handleChangeMealValue }

}

export default useSearchRecepieByName