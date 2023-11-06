import { useState } from "react"
import NavBar from '../components/NavBar.jsx'

const LogicProvider = () => {

    const [showNavbarState, setShowNavbarState] = useState(false)

    const showNavbar = () => {
        const aside = document.querySelector('aside')
        const section = document.getElementById('container-shop2')
        const section2 = document.getElementById('container-shop')
        const div = document.getElementById('container-buttons1')
        aside.classList.remove('disabled')
        section.style.display = 'none'
        section2.style.display = 'none'
        div.style.display = 'none'

        setShowNavbarState(showNavbarState)
    }

    const hideNavbar = () => {

        const aside = document.querySelector('aside')
        const section = document.getElementById('container-shop2')
        const section2 = document.getElementById('container-shop')
        const div = document.getElementById('container-buttons1')
        aside.classList.add('disabled')
        section.style.display = 'block'
        section2.style.display = 'block'
        div.style.display = 'block'

        setShowNavbarState(showNavbarState)
    }

    return(
        <NavBar
        showNavbar={showNavbar}
        hideNavbar={hideNavbar}
        />
    )
}

export default LogicProvider;