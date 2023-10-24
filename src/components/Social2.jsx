import iconEmail from '../img/mail.svg'
import iconGithub from '../img/github.svg'
import iconLinkedin from '../img/Linkedin.svg'
import iconInstagram from '../img/instagram.svg'
import Social from '../tools/Social'

const Social2 = () => {

    return (
        <div className='container'>
            <Social clase='button' icon={iconLinkedin} iconAlt='link linkedin' />
            <Social clase='button button22' icon={iconGithub} iconAlt='link github'/>
            <Social clase='button button3' icon={iconEmail} iconAlt='link email' />
            <Social clase='button button4' icon={iconInstagram} iconAlt='link instagram' />
        </div>
    )
}

export default Social2