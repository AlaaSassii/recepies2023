import React from 'react'
import './MealCard.scss';
type MealCardProps = {
    idMeal: string,
    strMeal: string,
    image: string,
    strArea: string,
    strCategory: string,

}
const MealCard = () => {
    return (
        <div className='meal__card'>
            <img src="https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg" alt="" />
            <div className='info'>
                <h2>Keleya Zaara</h2>
                <p><b>From:</b>Tunisia</p>
                <p>Add the ginger, garlic, soy sauce, sake and sugar to a bowl and whisk to combine. Add the chicken, then stir to coat evenly. Cover and refrigerate for at least 1 hou</p>
            </div>
            <button>Look More</button>
        </div>
    )
}

export default MealCard