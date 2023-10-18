import { FC } from "react"
import useSelectDropdown from "../../../hooks/useSelectDropdown"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import './SelectDropdown.scss'
type SelectDropDownProps = {
    elements: string[],
    dropDownTilte: string,
    loading: boolean,
    getRecepie: (elememt: string) => void,
    selectDropDownValue?: string,
    handleChangeSlectDropDown?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    getSearchValueFunction?: (name: string) => void
}
const SelectDropdown: FC<SelectDropDownProps> = ({
    elements,
    dropDownTilte,
    loading,
    getRecepie,
    selectDropDownValue,
    handleChangeSlectDropDown,
    getSearchValueFunction
}) => {
    const { handleInputChange, inputValue, selectElement, showElements, toggleShowElements, hideElementsFunction } = useSelectDropdown(handleChangeSlectDropDown)

    const handleSelect = (element: string) => {
        if (getSearchValueFunction === undefined) {
            selectElement(element);
            getRecepie(element);
        } else {
            getSearchValueFunction(element);
            getRecepie(element);
            hideElementsFunction()
        }

    }

    return (
        <div className="select__dropdown">
            <div className="dropdown__main">
                <input
                    type="text"
                    placeholder={loading ? "Loading..." : dropDownTilte}
                    onChange={handleInputChange}
                    value={selectDropDownValue ? selectDropDownValue : inputValue}
                    disabled={loading}

                />
                <button onClick={toggleShowElements}>{showElements ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</button>
            </div>
            {
                (showElements && !loading)
                    ?
                    <div className="not__selected__elements">
                        {elements
                            .filter(element => element.toLocaleLowerCase().includes(selectDropDownValue ? selectDropDownValue.toLocaleLowerCase() : inputValue.toLocaleLowerCase()))
                            .map(element => <p key={`${element}__notSlected`} onClick={() => handleSelect(element)}>{element}</p>)}
                    </div >
                    :
                    null

            }
        </div>
    )
}

export default SelectDropdown