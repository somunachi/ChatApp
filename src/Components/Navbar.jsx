import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className="logo">CoCo Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        {/* <span>Muna</span> */}
        <button onClick={()=> signOut(auth)}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar