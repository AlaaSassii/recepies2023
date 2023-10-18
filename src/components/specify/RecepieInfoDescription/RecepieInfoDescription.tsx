import { FC, useState } from 'react'
import './RecepieInfoDescription.scss'
import { Link } from 'react-router-dom'

type RecepieInfoDescriptionType = {
    recepie: string,
    videoLink: string
}
const RecepieInfoDescription: FC<RecepieInfoDescriptionType> = ({ recepie, videoLink }) => {
    const [errorVideo, setErrorVideo] = useState(false)
    return (
        <div className='recepie__info__description'>
            <h1>How to Cook this? 😋</h1>
            <p className='recepie'>{recepie}</p>
            <div className="youtube__video">
                {errorVideo ? <iframe width="560" height="315" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" onError={() => setErrorVideo(true)}></iframe>
                    :
                    <Link to={videoLink} target='_blank' >{videoLink}</Link>
                }
            </div>
        </div>
    )
}

export default RecepieInfoDescription