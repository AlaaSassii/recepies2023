import { useEffect } from 'react'
import { useDebounce } from './useDebounce';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { changeName, getRecepies } from '../redux/recepiesByNameSlice';

const useSearchRecepieByName = () => {
    const dispatch = useAppDispatch();
    const { recepies, error, loading, name } = useAppSelector(state => state.recepiesName);
    const debouncedSearchTerm = useDebounce(name, 500);
    const handleChangeMealValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(e))
    }
    useEffect(() => {
        // if (debouncedSearchTerm) {
        dispatch(getRecepies(debouncedSearchTerm))
        // }
    }, [debouncedSearchTerm])
    return { recepies, error, loading, name, handleChangeMealValue }

}

export default useSearchRecepieByName