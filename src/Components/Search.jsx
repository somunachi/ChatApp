import React, { useContext, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, getDoc, setDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const {currentUser} =  useContext(AuthContext)

  const handleSearch = async() => {
    const q = query(
        collection(db, "users"),
        where("displayName", "==" , username)
        );
    
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    setUser(doc.data())
  });
    } catch(error) {
      setError(true);
    }
  }

  const handleKey = e => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // dispatch({type:"CHANGE_USER", payload: u})

    const combinedId = 
      currentUser.uid > user.uid 
      ? currentUser.uid + user.uid 
      : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if(!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), {messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId+".userInfo"] : {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
      [combinedId+".date"]: serverTimestamp()
    });

            await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId+".userInfo"] : {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        },
      [combinedId+".date"]: serverTimestamp()
    });
      }
    } catch (error) {}

    setUser(null)
    setUsername("")
  };

  return (
    <div className='search'>
      <div className="searchform">
        <input 
            type="text"
            name=""
            id=""
            placeholder='Find a friend'
            onKeyDown={handleKey}
            onChange={e=> setUsername(e.target.value)}
            value={username}
            />
      </div>
      {error && <span>User not found</span>}
     {user &&
       <div className="userChat" onClick={handleSelect}>
       <img src={user.photoURL} alt="" />
       <div className="userChatInfo">
         <span>{user.displayName}</span>
       </div>
     </div> 
    }
    </div>
  )
}

export default Search