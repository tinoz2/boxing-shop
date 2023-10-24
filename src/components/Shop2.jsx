import imgSection1 from '../img/boxing2.svg'
import imgSection2 from '../img/boxing3.svg'
import Shop from './Shop.jsx'
import Button from '../tools/Button.jsx'

const Shop2 = () => {
    return (
        <>
            <div id='container-shop' className='container-shop'>
                <h2 className='h2-shopping'>About us<span className='span'>.</span></h2>
                <div className='container-shops'>
                    <Shop imgSection={imgSection1} alt='red boxing gloves' title='Lorem, ipsum dolor consectetur' title2='Lorem, ipsum dolor.' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' description2=' Ratione nostrum quisquam, quam explicabo cumque ipsa?' optional={<Button classB='primary-button' title='see more' />} />
                </div>
                <div className='container-shops'>
                    <Shop imgSection={imgSection2} alt='red boxing gloves' title='Lorem, ipsum dolor consectetur' title2='Lorem, ipsum dolor.' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' description2=' Ratione nostrum quisquam, quam explicabo cumque ipsa?' optional={<Button classB='primary-button' title='see more' />} />
                </div>
            </div>
        </>
    )
}

export default Shop2