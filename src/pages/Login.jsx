

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="logo">CoCo Chat</div>
        <div className="formWrapper">
            
            <span className="title">Log In</span>
            <form>
                
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="password" name="" id="" placeholder='Password' />
                
                <button>Sign in</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login