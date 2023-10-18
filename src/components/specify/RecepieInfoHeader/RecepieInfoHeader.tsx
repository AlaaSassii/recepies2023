import { FC } from 'react'
import './RecepieInfoHeader.scss'

type InfoHeaderType = {
    image: string,
    ingredients: string[],
    ingredientsAmount: string[]
}
const RecepieInfoHeader: FC<InfoHeaderType> = ({ image, ingredients, ingredientsAmount }) => {
    return (
        <div className='recepie__info__header'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <table className='ingredients__table'>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingredients.map((v, i) =>
                            <tr>
                                <td>{v}</td>
                                <td>{ingredientsAmount[i]}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RecepieInfoHeader