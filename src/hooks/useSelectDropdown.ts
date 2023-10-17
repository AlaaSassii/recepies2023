import { useState } from 'react';
import { element } from '../enums/showOrHideElement';

const useSelectDropdown = (e: string[]) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [elements, setElements] = useState<string[]>(e);
    const [showElements, setShowElements] = useState<element>(element.hide)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowElements(element.show);
    }
    const showElementsFunction = () => { setShowElements(element.show) }
    const hideElementsFunction = () => { setShowElements(element.hide) }
    const toggleShowElements = () => {
        if (showElements) {
            hideElementsFunction()
        } else {
            showElementsFunction()
        }
    }

    const selectElement = (element: string) => {
        setInputValue(element);
        setElements(elements.filter(v => v !== element));
    }


    return { inputValue, showElements, toggleShowElements, handleInputChange, selectElement, elements }
}
export default useSelectDropdown