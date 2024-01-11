import { useState } from 'react';
import addPhoto from '../assets/icons8-add-photo-48.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth, db, storage} from '../firebase'; 
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';
import { EyeSlash } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";


const Register = () => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
     
      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on((error) => {
          setError(true);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
             await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
      });

            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate("/");
          });
        }
      );
     
  } catch(error) {
    setError(true)
  }

    };

 
    const revealPwd = () => {
      setShowPassword(!showPassword)
    
    };


  return (
    <div className='formContainer'>
      <div className="logo">CoCo Chat</div>
        <div className="formWrapper">
            
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Display name' id='displayName'/>
                <input type="email" name="" id="userEmail" placeholder='Email'/>
                <div className="pwd">
                <input type={showPassword ? "text" : "password"} autoComplete='off' name="" id="userPwd" placeholder='Password' />
                  <div className="eyeicon">
                  {showPassword ? <Eye onClick={revealPwd}/> : <EyeSlash onClick={revealPwd}/>}
                  </div>
                </div>

                <input style={{display: "none"}} type="file" name="" id="file" />
                <label htmlFor="file">
                  <img src={addPhoto} alt="" className='addPhoto' />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {error && <span>Something went wrong</span>}
            </form>
            <p>Already registered? <Link className='linkto' to="/login"> Log in</Link></p>
        </div>
    </div>
  )
}

export default Register