import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Meal } from '../types/meals';
import { AxiosResponse } from 'axios';

const useGetMealInfo = (id: string) => {
    const [Meal, setMeal] = useState<Meal | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        axios(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response: AxiosResponse) => {
                setMeal(response.data);
                setLoading(false)
            })
            .catch((error: AxiosError) => {
                setLoading(false)
                setError(error.message)
            })
    }, [])

    return { Meal, loading, error }
}


export default useGetMealInfo;