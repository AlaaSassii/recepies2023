import { FC, useState } from "react"
import useSelectDropdown from "../../../hooks/useSelectDropdown"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"

type SelectDropDownProps = {
    elements: string[],
    dropDownTilte: string
}
const SelectDropdown: FC<SelectDropDownProps> = ({ elements, dropDownTilte }) => {
    const { deSelectSelectedElement, handleInputChange, inputValue, selectElement, showElements, toggleShowElements, notSelectedElements, selectedElements } = useSelectDropdown(elements)

    return (
        <div className="select__dropdown">
            <div className="dropdown__main">
                <div className="inputs">
                    <input
                        type="text"
                        placeholder={dropDownTilte}
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                    {
                        selectedElements.map(v => <div key={`${v}__notSlected`}><div>{v}</div><button onClick={() => deSelectSelectedElement(v)}><AiOutlineClose /></button></div>)
                    }
                </div>
                <button onClick={toggleShowElements}>{showElements ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</button>
            </div>
            {
                showElements
                &&
                <div className="not__selected__elements">
                    {notSelectedElements.map(v => <div key={`${v}__notSlected`} onClick={() => selectElement(v)}>{v}</div>)}
                </div >

            }
        </div>
    )
}

export default SelectDropdown