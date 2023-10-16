import { useState, useEffect } from 'react'
import { Meals } from '../types/meals';
import { useDebounce } from './useDebounce';
import axios from 'axios';

const useSearchMealByName = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Meals>([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const handleChangeMealValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        useEffect(() => {
            if (debouncedSearchTerm) {
                const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearchTerm}`;
                axios.get(apiUrl)
                    .then((response) => {
                        setSearchResults(response.data.meals || []);
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                        setSearchResults([]);
                    });
            } else {
                setSearchResults([]);
            }
        })
        return { searchResults, handleChangeMealValue }
    };

}

export default useSearchMealByName