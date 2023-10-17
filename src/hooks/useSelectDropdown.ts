import { useState, useEffect } from 'react';

const useSelectDropdown = (elements: string[]) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [notSelectedElements, setNotSelectedElements] = useState<string[]>(elements);
    const [selectedElements, setSelectedElements] = useState<string[]>([]);
    const [showElements, setShowElements] = useState(false)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowElements(true);
    }
    const toggleShowElements = () => {
        setShowElements(!showElements);
    }

    const selectElement = (element: string) => {
        setSelectedElements([...selectedElements, element]);
        setNotSelectedElements(notSelectedElements.filter(v => v !== element));
    }
    const deSelectSelectedElement = (element: string) => {
        setNotSelectedElements([...notSelectedElements, element]);
        setSelectedElements(selectedElements.filter(v => v !== element));

    }

    return { inputValue, showElements, toggleShowElements, deSelectSelectedElement, handleInputChange, selectElement, notSelectedElements, selectedElements }
}
export default useSelectDropdown