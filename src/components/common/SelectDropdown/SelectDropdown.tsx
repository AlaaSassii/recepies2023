import { FC } from "react"
import useSelectDropdown from "../../../hooks/useSelectDropdown"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"

type SelectDropDownProps = {
    elements: string[],
    dropDownTilte: string,
    loading: boolean,
    getRecepie: (elememt: string) => void,
    selectDropDownValue?: string,
    handleChangeSlectDropDown?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const SelectDropdown: FC<SelectDropDownProps> = ({ elements, dropDownTilte, loading, getRecepie, selectDropDownValue, handleChangeSlectDropDown }) => {
    const { handleInputChange, inputValue, selectElement, showElements, toggleShowElements, } = useSelectDropdown(handleChangeSlectDropDown)
    const handleSelect = (element: string) => {
        selectElement(element);
        getRecepie(element)
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
                            .filter(element => element.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
                            .map(element => <h1 key={`${element}__notSlected`} onClick={() => handleSelect(element)}>{element}</h1>)}
                    </div >
                    :
                    null

            }
        </div>
    )
}

export default SelectDropdown