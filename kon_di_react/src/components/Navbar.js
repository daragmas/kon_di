import { NavLink } from 'react-router-dom'
import '../navbar.css'
import '../App.css'
import { useEffect, useState } from 'react'

const NavBar = ({onLoginChange, loginState}) => {

    const [buttons,setButtons] = useState()

    const deleteCookie = () => {
        document.cookie = 'hash='
        // console.log("Cookie: ", document.cookie)
        onLoginChange(false)
    }

    useEffect(() => {
        // console.log('useEffect proc')
        console.log('loginState', loginState)
        setButtons(loginState ?
            <>
                <NavLink style={{ textDecoration: 'none' }} to='/profile'><li className='nav-items btn-hover'>PROFILE</li></NavLink>
                <NavLink onClick={deleteCookie} style={{ textDecoration: 'none' }} to='/'><li className='nav-items btn-hover'>LOGOUT</li></NavLink>
            </> :
            <>
                <NavLink style={{ textDecoration: 'none' }} to='/login'><li className='nav-items btn-hover'>LOGIN</li></NavLink>
                <NavLink style={{ textDecoration: 'none' }} to='/register'><li className='nav-items btn-hover'>REGISTER</li></NavLink>
                
            </>)
    }, [loginState])

    // console.log('buttons:', buttons)

    return (
        <nav className="navbar">
            <div className='logo' >LOGO</div>
            <ul className='nav-list'>
                <NavLink style={{ textDecoration: 'none' }} to='/'><li className='nav-items btn-hover'>HOME</li></NavLink>
                <NavLink style={{ textDecoration: 'none' }} to='/about'><li className='nav-items btn-hover'>ABOUT</li></NavLink>
                {buttons}
            </ul>
        </nav>
    )
}

export default NavBar

// onClick = {() => { document.cookie = 'bye; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;' }} 
// onClick={onCookieChange(document.cookie)}