import {NavLink} from 'react-router-dom'
import '../navbar.css'
import '../App.css'

const NavBar = () => {
return (
    <nav className="navbar">
        <div className='logo'>LOGO</div>
        <ul className='nav-list'>
            <NavLink style={{textDecoration: 'none'}} to='/'><li className='nav-items btn-hover'>Home</li></NavLink>
            <NavLink style={{textDecoration: 'none'}} to='/about'><li className='nav-items btn-hover'>About</li></NavLink>
            <NavLink style={{textDecoration: 'none'}}to='/login'><li className='nav-items btn-hover'>LOGIN</li></NavLink>
            <NavLink style={{textDecoration: 'none'}} to='/register'><li className='nav-items btn-hover'>REGISTER</li></NavLink>
        </ul>
    </nav>
)
}

export default NavBar