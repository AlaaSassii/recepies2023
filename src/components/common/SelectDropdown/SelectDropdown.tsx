import { FC } from "react"
import useSelectDropdown from "../../../hooks/useSelectDropdown"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"

type SelectDropDownProps = {
    elements: string[],
    dropDownTilte: string,
    loading: boolean
}
const SelectDropdown: FC<SelectDropDownProps> = ({ elements: e, dropDownTilte, loading }) => {
    const {
        handleInputChange,
        inputValue,
        selectElement,
        showElements,
        toggleShowElements,
        elements,
    } = useSelectDropdown(e)

    return (
        <div className="select__dropdown">
            <div className="dropdown__main">
                <input
                    type="text"
                    placeholder={loading ? "Loading..." : dropDownTilte}
                    onChange={handleInputChange}
                    value={inputValue}
                    disabled={loading}
                />
                <button onClick={toggleShowElements}>{showElements ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</button>
            </div>
            {
                (showElements && loading)
                &&
                <div className="not__selected__elements">
                    {elements
                        .filter(element => element.includes(inputValue))
                        .map(element => <div key={`${element}__notSlected`} onClick={() => selectElement(element)}>{element}</div>)}
                </div >

            }
        </div>
    )
}

export default SelectDropdown