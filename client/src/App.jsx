import { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react'; 
import { ChannelListContainer , ChannelContainer , Auth } from './components/index';
import Cookies from 'universal-cookie';
import "./App.css"
import 'stream-chat-react/dist/css/index.css'


const cookies = new Cookies();

let apiKey = import.meta.env.VITE_API_KEY;
  

  const authToken = cookies.get('token');
  const client = StreamChat.getInstance(apiKey);

function App() {
  const [createType , setCreateType] = useState('');
  const [isCreating , setIsCreating] = useState(false);
  const [isEditing , setIsEditing] = useState(false);

  if(authToken){
    client.connectUser({
      id : cookies.get("userId"),
      name : cookies.get("userName"),
      fullName : cookies.get("fullName"),
      image : cookies.get("avatarUrl"),
      hashedPassword : cookies.get("hashedPassword"),
      phoneNumber : cookies.get("phoneNumber")
    },authToken)
  }

  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
      <Chat client={client}>
        <ChannelListContainer
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        setCreateType = {setCreateType}
        setIsEditing = {setIsEditing}
        />
        <ChannelContainer 
        isCreating= {isCreating}
        setIsCreating = {setIsCreating}
        isEditing  = {isEditing}
        setIsEditing = {setIsEditing}
        createType =  {createType}
        />
      </Chat>
      
    </div>
  )
}

export default App
