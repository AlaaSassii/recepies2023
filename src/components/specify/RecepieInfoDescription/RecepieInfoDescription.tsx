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
            <iframe width="560" height="315" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}

export default RecepieInfoDescription