import Home from './components/Home.jsx'
import Shop2 from './components/Shop2.jsx'
import Shopping from './components/Shopping.jsx'
import NavBar from './components/NavBar.jsx'

const ComponentsContainer = () => {
    return (
        <div className='container-wrapper'>
                <NavBar />
            <div className='container-components'>
                <Home />
                <Shop2 />
                <Shopping />
            </div>
        </div>
    )
}

export default ComponentsContainer