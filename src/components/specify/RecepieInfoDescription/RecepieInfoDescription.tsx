import { FC } from 'react'
import './RecepieInfoDescription.scss'

type RecepieInfoDescriptionType = {
    recepie: string,
    videoLink: string
}
const RecepieInfoDescription: FC<RecepieInfoDescriptionType> = ({ recepie, videoLink }) => {
    return (
        <div className='recepie__info__description'>
            <h1>How to Cook this? 😋</h1>
            <p className='recepie'>{recepie}</p>
            <iframe src={videoLink} width="420" height="345"></iframe>
        </div>
    )
}

export default RecepieInfoDescription