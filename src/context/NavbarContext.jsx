import { createContext, useState } from "react"

export const LogicContext = createContext(null)

export const LogicProvider = ({children}) => {

    const [showNavbarState, setShowNavbarState] = useState(false)

    const showNavbar = () => {
        const aside = document.querySelector('aside')
        const section = document.getElementById('container-shop2')
        const section2 = document.getElementById('container-shop')
        const div = document.getElementById('container-buttons1')
        const card = document.getElementsByName('container-all-card2')
        aside.classList.remove('disabled')
        section.style.display = 'none'
        section2.style.display = 'none'
        div.style.display = 'none'
        card.style.display = 'none'

        setShowNavbarState(showNavbarState)
    }

    const hideNavbar = () => {

        const aside = document.querySelector('aside')
        const section = document.getElementById('container-shop2')
        const section2 = document.getElementById('container-shop')
        const div = document.getElementById('container-buttons1')
        const card = document.getElementsByName('container-all-card2')
        aside.classList.add('disabled')
        section.style.display = 'block'
        section2.style.display = 'block'
        div.style.display = 'block'
        card.style.display = 'block'

        setShowNavbarState(showNavbarState)
    }

    return(
        <LogicContext.Provider value={{showNavbar, hideNavbar}}>
            {children}
        </LogicContext.Provider>
    )
}

export default LogicProvider;