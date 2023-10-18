import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { recepie } from '../types/meals';
import { AxiosResponse } from 'axios';

const useGetMealInfo = (id: string | undefined) => {
    if (!id) return { Meal: undefined, loading: false, error: 'something went wrong!' }
    const [Meal, setMeal] = useState<recepie | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        axios(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response: AxiosResponse) => {
                setMeal(response.data.meals[0]);
                setLoading(false);
                console.log(response.data.meals[0]);
            })
            .catch((error: AxiosError) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])
    const ingredients = Object.values(Meal || {})
        .filter((v, i) => Object.keys(Meal || {})[i].includes('strIngredient'))
        .filter(v => v !== '')

    const ingredientsAmount = Object.values(Meal || {})
        .filter((v, i) => Object.keys(Meal || {})[i].includes('strMeasure'))
        .slice(0, ingredients.length)
    return { Meal, loading, error, ingredients, ingredientsAmount }
}


export default useGetMealInfo;