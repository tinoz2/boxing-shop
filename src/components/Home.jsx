import '../components/home.css'
import Circle from '../tools/Circle.jsx'

const Home = () => {
    return (
        <>
            <main className='main'>
                <div className='container-h1'>
                    <h1>BOXING</h1>
                    <p className='p-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='more-container'>
                        <Circle />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home