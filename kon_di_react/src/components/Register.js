import '../Auth.css'
import '../App.css'

import {useState} from 'react'
const Register = () => {

    const [formChange, setFormChange] = useState({})
    const handleChange = (key, value) => {
        setFormChange({
            ...formChange,
            [key]: value
        })
    }

console.log(formChange)
    return (
        <div className="auth reg">
            <div className='auth-container reg-con'>
                <div>
                    <img src='auth-pic.svg'/>
                </div>
                <form>
                <h3>Register</h3>
                    <input type='username' name='username' placeholder='username' onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
                    <input type='email' name='email' placeholder='email'onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
                    <input type='password' name='passowrd' placeholder='password'onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
                    <button>Register</button>
                <h4>Already have an account? <span>LOGIN</span></h4>
                </form>
            </div>
        </div>
    )
    }
    
    export default Register