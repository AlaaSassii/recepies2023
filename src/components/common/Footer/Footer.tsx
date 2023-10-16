import './Footer.scss';
import { Link } from 'react-router-dom'
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="creator__info">
                    <p>
                        Hello! <b>I'm Ala Sassi</b>, the proud creator of this project. I'm an experienced React developer with a passion for frontend development. Over the years, I've built a multitude of projects, each a testament to my dedication and love for my work. Welcome to this endeavor, crafted with care and expertise.
                    </p>
                </div>
                <div className='platforms'>
                    <Link to='https://github.com/alaasassii'><AiOutlineGithub /></Link>
                    <Link to='https://github.com/alaasassii'><BsLinkedin /></Link>
                    <Link to='https://github.com/alaasassii'><BsInstagram /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer