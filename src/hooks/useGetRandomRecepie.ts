import { useEffect } from 'react'
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { getRadnomRecepie } from '../redux/randomRecepieSlice';

const useGetRandomRecepie = () => {
    const dispatch = useAppDispatch();
    const { error, loading, randomRecepie } = useAppSelector(state => state.randomRecepies);
    const getRandomRecpieFunction = () => {
        dispatch(getRadnomRecepie());
    }
    useEffect(() => {
        if (randomRecepie === undefined) {
            getRandomRecpieFunction();
        }
    }, []);
    return { randomRecepie, error, loading, getRandomRecpieFunction };
}

export default useGetRandomRecepie