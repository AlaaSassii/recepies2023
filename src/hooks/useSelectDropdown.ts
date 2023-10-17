import { useState } from 'react';
import { element } from '../enums/showOrHideElement';

const useSelectDropdown = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [showElements, setShowElements] = useState<element>(element.hide)

    const showElementsFunction = () => {
        setShowElements(element.show)
    }
    const hideElementsFunction = () => {
        setShowElements(element.hide)
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        showElementsFunction()
    }

    const toggleShowElements = () => {
        if (showElements) {
            hideElementsFunction()
        } else {
            showElementsFunction()
        }
    }
    const selectElement = (element: string) => {
        setInputValue(element);
        hideElementsFunction()
    }


    return { inputValue, showElements, toggleShowElements, handleInputChange, selectElement }
}
export default useSelectDropdown