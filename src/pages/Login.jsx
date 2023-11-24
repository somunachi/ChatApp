import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {
      await signInWithEmailAndPassword(auth, email, password)
     navigate("/")
  } catch(error) {
    setError(true)
  }

    };


  return (
    <div className='formContainer'>
      <div className="logo">CoCo Chat</div>
        <div className="formWrapper">
            
            <span className="title">Log In</span>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="password" name="" id="" placeholder='Password' />
                
                <button>Sign in</button>
            </form>
            {error && <span>Something went wrong</span>}

            <p>Don't have an account? <Link to="/register"> Register</Link></p>
        </div>
    </div>
  )
}

export default Login