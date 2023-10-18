import { FC } from 'react'
import { useNavigate, } from 'react-router-dom'
import './RecepieCard.scss'
import { BsArrowRight } from 'react-icons/bs'
type recepieeCardType = {
    image: string,
    recepieName: string,
    recepieId: string,
    category?: string,
    region?: string
}
const RecepieCard: FC<recepieeCardType> = ({ image, recepieId, recepieName, category, region }) => {
    const navigate = useNavigate()
    return (
        <div className='recepie__card'>
            <div className='recepie__card__image'>
                <img src={image} />
            </div>
            <div className="info">
                <p><b>Recepie Name: </b>{recepieName}</p>
                {
                    (category && region) &&
                    <p>This recepie is belongs to <b>{category}</b> category and from <b>{region}</b> region</p>
                }
                <button className='recepie__card__button' onClick={() => { navigate(`/recepie-info/${recepieId}`) }}><div>Learn More</div><BsArrowRight /></button>
            </div>
        </div>
    )
}

export default RecepieCard
// /recepie-info/:id