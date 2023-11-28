import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Chats = () => {

  const [chats, setChats] = useState([])

  const {currentUser} = useContext(AuthContext);

  useEffect(()=>{
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => 
      {
        setChats(doc.data())
      }
      )
      return ()=>{
        unsub();
      };
    };

    currentUser.uid && getChats()
  }, [currentUser.uid]);

  console.log(chats)
  return (
    <div className='chats'> 
     <div className="userChat">
        <img src="src\assets\DVIT6225.JPG" alt="" />
      <div className="userChatInfo">
          <span>Jane</span>
          <div>Hello dear!</div>
      </div>
  </div>

  <div className="userChat">
        <img src="src\assets\DVIT6225.JPG" alt="" />
      <div className="userChatInfo">
          <span>Jane</span>
          <div>Hello dear!</div>
      </div>
  </div>

  <div className="userChat">
        <img src="src\assets\DVIT6225.JPG" alt="" />
      <div className="userChatInfo">
          <span>Jane</span>
          <div>Hello dear!</div>
      </div>
  </div>


  </div>
  )
}

export default Chats