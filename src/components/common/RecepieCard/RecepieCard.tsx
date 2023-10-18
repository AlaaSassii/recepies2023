import { FC } from 'react'
import { useNavigate, } from 'react-router-dom'
import './RecepieCard.scss'
import { BsArrowRight } from 'react-icons/bs'
type recepieeCardType = {
    image: string,
    recepieName: string,
    recepieId: string,
    description?: string
}
const RecepieCard: FC<recepieeCardType> = ({ image, recepieId, recepieName, description }) => {
    const navigate = useNavigate()
    return (
        <div className='recepie__card'>
            <div className='recepie__card__image'>
                <img src={image} />
            </div>
            <h1>{recepieName}</h1>
            {
                description && <p className='recepie__card__paragraph'>{description}</p>
            }
            <button className='recepie__card__button' onClick={() => { navigate(`/recepie-info/${recepieId}`) }}><div>Learn More</div><BsArrowRight /></button>
        </div>
    )
}

export default RecepieCard
// /recepie-info/:id