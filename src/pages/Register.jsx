import addPhoto from '../assets/icons8-add-photo-48.png';

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="logo">CoCo Chat</div>
        <div className="formWrapper">
            
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Display name'/>
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="password" name="" id="" placeholder='Password' />
                <input style={{display: "none"}} type="file" name="" id="file" />
                <label htmlFor="file">
                  <img src={addPhoto} alt="" className='addPhoto' />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already registered? Log in</p>
        </div>
    </div>
  )
}

export default Register