import {NavLink} from 'react-router-dom'
import '../navbar.css'
import '../App.css'

const NavBar = () => {

    const deleteCookie = ()=>{
        document.cookie = 'hash='
        console.log("Cookie: ", document.cookie)
    }

return (
    <nav className="navbar">
        <div className='logo'>LOGO</div>
        <ul className='nav-list'>
            <NavLink style={{textDecoration: 'none'}} to='/'><li className='nav-items btn-hover'>Home</li></NavLink>
            <NavLink style={{textDecoration: 'none'}} to='/about'><li className='nav-items btn-hover'>About</li></NavLink>
            {document.cookie === '' || document.cookie === 'hash='? 
                <> 
                    <NavLink style={{textDecoration: 'none'}}to='/login'><li className='nav-items btn-hover'>LOGIN</li></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/register'><li className='nav-items btn-hover'>REGISTER</li></NavLink> 
                </> : 
                <>
                    <NavLink style={{ textDecoration: 'none' }} to='/profile'><li className='nav-items btn-hover'>PROFILE</li></NavLink>
                    <NavLink onClick={deleteCookie}style={{ textDecoration: 'none' }} to='/'><li className='nav-items btn-hover'>LOGOUT</li></NavLink> 
                </>

            }
        </ul>
    </nav>
)
}

export default NavBar

// onClick = {() => { document.cookie = 'bye; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;' }} 