import { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react'; 
import { ChannelListContainer , ChannelContainer } from './components/index'



function App() {
  let apiKey = import.meta.env.VITE_API_KEY;
  // console.log(apiKey)

  const clients= StreamChat.getInstance(apiKey);
  console.log(clients)

  return (
    <div>
      <Chat client={clients}>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
      
    </div>
  )
}

export default App
