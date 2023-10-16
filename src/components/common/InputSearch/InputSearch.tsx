import { FC } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import './InputSearch.scss'
type InputSearchProps = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: () => void,
}
const InputSearch: FC<InputSearchProps> = ({ value, handleChange, handleClick }) => {
    return (
        <div className='input__search'>
            <input
                onChange={handleChange}
                type="text"
                value={value}
                placeholder='Search ..'
            />
            <button onClick={handleClick}><BiSearchAlt2 /></button>
        </div>
    )
}

export default InputSearch