import { useState, useEffect } from 'react'
import { Meal } from '../types/meals';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useGetRandomRecepie = () => {
    const [randomRecepie, setRandomRecepie] = useState<undefined | Meal>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const getRadomRecepie = () => {
        setLoading(true);
        axios(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then((response: AxiosResponse) => {
                setLoading(false);
                console.log(response.data);
                setRandomRecepie(randomRecepie)
            })
            .catch((error: AxiosError) => {
                setLoading(false);
                setError(error.message)
            })
    }
    useEffect(() => {
        getRadomRecepie()
    }, [])
    return { randomRecepie, loading, error, getRadomRecepie }
}

export default useGetRandomRecepie