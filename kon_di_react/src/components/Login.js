const Login = () => {
return (
    <div className="auth">
        <div className='auth-container'>
            <h3>LOGIN</h3>
            <hr/>
            <form>
                <input type='text' placeholder='username'/>
                <input type='password'placeholder='password'/>
                <button>LOGIN</button>
            </form>
            <h4>Don't have an account? <span>REGISTER</span></h4>
        </div>
    </div>
)
}

export default Login