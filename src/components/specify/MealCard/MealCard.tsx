import { FC } from 'react'
import './MealCard.scss';
import { useNavigate } from 'react-router-dom';
type MealCardProps = {
    idMeal: string,
    strMeal: string,
    strMealThumb: string,
    strArea: string,
    strCategory: string,

}

const MealCard: FC<MealCardProps> = (
    { idMeal,
        strMeal,
        strMealThumb,
        strArea,
        strCategory,
    }) => {
    let navigate = useNavigate();
    return (
        <div className='meal__card'>
            <img src={strMealThumb} alt="" />
            <div className='info'>
                <h2>{strMeal}</h2>
                <p><b>From:</b>{strArea}</p>
                <p>{strCategory}</p>
            </div>
            <button onClick={() => navigate(`/recepie/${idMeal}`)}>Look More</button>
        </div>
    )
}

export default MealCard