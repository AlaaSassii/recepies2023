import { useState } from 'react';
import { sortArrayAlphabetically } from '../helper/sortArrayAlphabitically';
import { element } from '../enums/showOrHideElement';

const useSelectDropdown = (elements: string[]) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [notSelectedElements, setNotSelectedElements] = useState<string[]>(elements);
    const [selectedElements, setSelectedElements] = useState('');
    const [showElements, setShowElements] = useState<element>(element.hide)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowElements(element.show);
    }
    const toggleShowElements = () => {
        setShowElements(showElements ? element.hide : element.hide);
    }

    const selectElement = (element: string) => {
        setSelectedElements(element);
        setNotSelectedElements(notSelectedElements.filter(v => v !== element));
    }
    const deSelectSelectedElement = (element: string) => {
        setNotSelectedElements(sortArrayAlphabetically([...notSelectedElements, element]));
        setSelectedElements('');

    }

    return { inputValue, showElements, toggleShowElements, deSelectSelectedElement, handleInputChange, selectElement, notSelectedElements, selectedElements }
}
export default useSelectDropdown