import { useState, useEffect } from 'react'
import { Meals } from '../types/meals';
import { useDebounce } from './useDebounce';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useSearchMealByName = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Meals>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const handleChangeMealValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        useEffect(() => {
            if (debouncedSearchTerm) {
                setLoading(true);
                const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearchTerm}`;
                axios.get(apiUrl)
                    .then((response: AxiosResponse) => {
                        setSearchResults(response.data.meals || []);
                        setLoading(false);
                    })
                    .catch((error: AxiosError) => {
                        setError(error.message)
                        setSearchResults([]);
                        setLoading(false);
                    });
            } else {
                setSearchResults([]);
            }
        })
        return { searchTerm, searchResults, handleChangeMealValue, loading, error }
    };

}

export default useSearchMealByName