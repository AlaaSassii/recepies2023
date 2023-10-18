import React, { useState } from 'react';
import { element } from '../enums/showOrHideElement';

type selectDropDownValueType = (e: React.ChangeEvent<HTMLInputElement>) => void
const useSelectDropdown = (selectDropDownValue: undefined | selectDropDownValueType) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [showElements, setShowElements] = useState<element>(element.hide)

    const showElementsFunction = () => {
        setShowElements(element.show)
    }
    const hideElementsFunction = () => {
        setShowElements(element.hide)
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectDropDownValue === undefined) {
            setInputValue(e.target.value);
            showElementsFunction()
        } else {
            selectDropDownValue(e)
            showElementsFunction()

        }
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

    return { inputValue, showElements, toggleShowElements, handleInputChange, selectElement, hideElementsFunction, showElementsFunction }
}
export default useSelectDropdown