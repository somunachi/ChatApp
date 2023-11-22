import { signOut } from "firebase/auth"
import { auth } from "../firebase"


const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">CoCo Chat</span>
      <div className="user">
        <img src="src\assets\DVIT6225.JPG" alt="" />
        {/* <span>Muna</span> */}
        <button onClick={()=> signOut(auth)}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar