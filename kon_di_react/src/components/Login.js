import '../Auth.css'
import '../App.css'
import {useState} from 'react'

const Login = () => {
    const [data, setData] = useState({})

    const getDate = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date()
        let year = d.getFullYear()
        let day = d.getDate() + 1
        let month = d.getMonth()
        let dayL = days[d.getDay() + 1];
        let hour = d.getHours()
        return `${dayL}, ${day} ${month} ${year} ${hour} UTC`
    }
        const getData = async() => {
            let req = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            let res= await req.json()
            document.cookie = `hash=${res.hashed_password}; expires=${getDate()}`
        }


    const handleChange = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
}

const handleSubmit = (e) => {
e.preventDefault()
getData()
console.log(document.cookie)
}
return (
    <div className="auth">
        <div className='auth-container login'>
            <h3>LOGIN</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='username' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                <input type='password'placeholder='password' name='password'onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
                <button>LOGIN</button>
            </form>
            <h4>Don't have an account? <span>REGISTER</span></h4>
        </div>
    </div>
)
}

export default Login