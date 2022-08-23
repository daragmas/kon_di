import {NavLink} from 'react-router-dom'

const NavBar = () => {
return (
    <nav className="navbar">
        <div className='logo'>LOGO</div>
        <ul className='nav-list'>
            <NavLink to='/'><li className='nav-items'>Home</li></NavLink>
            <NavLink to='/about'><li className='nav-items'>About</li></NavLink>
            <NavLink to='/login'><li className='nav-items'>LOGIN</li></NavLink>
            <NavLink to='/register'><li className='nav-items'>REGISTER</li></NavLink>
        </ul>
    </nav>
)
}

export default NavBar