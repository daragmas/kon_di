import '../Auth.css'
import '../App.css'

import {useState, useEffect} from 'react'
const Register = () => {

    const [formChange, setFormChange] = useState({})
    const handleChange = (key, value) => {
        setFormChange({
            ...formChange,
            [key]: value
        })
    }

        const postUser = async () => {
            let req = await fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formChange)
            })
            let res = await req.json()
            document.cookie = `hash=${res.hashed_password}`
        }

console.log(document.cookie.split('=')[1])

        const handleSubmit = (e) => {
            e.preventDefault()
            postUser()
        }
    return (
        <div className="auth reg">
            <div className='auth-container reg-con'>
                <div>
                    <img src='auth-pic.svg'/>
                </div>
                <form onSubmit={handleSubmit}>
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