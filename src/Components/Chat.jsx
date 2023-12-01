import { useContext } from 'react';
import addUser from '../assets/icons8-add-user-48.png';
import more from '../assets/icons8-more-50.png'
import videoCall from '../assets/icons8-video-call-48.png'
import {Input} from './Input';
import Messages from './Messages';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span className="username">{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={videoCall} alt="video chat" />
          <img src={addUser} alt="add contact" />
          <img src={more} alt="more" />
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  )
}

export default Chat