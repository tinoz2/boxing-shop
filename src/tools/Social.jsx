import '../tools/social.css'

const Social = ({icon, iconAlt, clase}) => {
    return (
            <div>
                <button className={clase}><img className='icon' src={icon} alt={iconAlt} /></button>
            </div>
    )
}

export default Social