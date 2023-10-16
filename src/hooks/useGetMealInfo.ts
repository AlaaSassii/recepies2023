import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Meal } from '../types/meals';
import { AxiosResponse } from 'axios';

const useGetMealInfo = (id: string | undefined) => {
    if (!id) {
        return { Meal: undefined, loading: false, error: 'something went wrong!' }
    }
    const [Meal, setMeal] = useState<Meal | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        axios(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response: AxiosResponse) => {
                setMeal(response.data);
                setLoading(false)
            })
            .catch((error: AxiosError) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    return { Meal, loading, error }
}


export default useGetMealInfo;