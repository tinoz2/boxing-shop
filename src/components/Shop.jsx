import '../components/shop.css'

const Shop = ({imgSection, alt, title, title2, description, description2, optional}) => {
    return (
        <>
            <section className='section'>
                <img className='boxing-gloves' src={imgSection} alt={alt} />
                <div className='container-section'>
                    <div className='container-section-1'>
                        <h2 className='h2-section'>{title} <br /> <span className='span'>{title2}</span></h2>
                        <small>{description} <br /> {description2} </small>
                    </div>
                    <div className='container-section-circle'>
                        {optional}
                    </div>
                    <hr />
                </div>
            </section>
        </>
    )
}

export default Shop