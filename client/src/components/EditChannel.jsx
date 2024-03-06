import React, { useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import { UserList } from './index';
import { CloseCreateChannel } from '../assets/CloseCreateChannel';


const ChannelNameInput = ({ channelName = '' , setChannelName })=>{
  const handleChange = (e)=>{
    e.preventDefault();
    setChannelName(e.target.value);
  }
  return (
    <div  className='channel-name-input__wrapper'>
      <p>Name</p>
      <input type='text' value={channelName} onChange={handleChange} placeholder='Channel-Name' />
      <p>Add Member</p>
    </div>

  )
}

const EditChannel = ({setIsEditing}) => {
  const { channel } = useChatContext();
  const [channelName , setChannelName] = useState(channel?.data?.name)
  const [selectedUser , setSelectedUser] = useState([]);

  const updateChannel  = async (e)=>{
    e.preventDefault();
    const nameChanged  = channelName !== (channel.data.name || channel.data.id);
    if(nameChanged){
      await channel.update({name : channelName} , {text  : `Channel name changed to ${channelName}`})
    }
    if(selectedUser.length){
      await channel.addMembers(selectedUser);
    }
    setChannelName(null);
    setIsEditing(false);
    setSelectedUser([]);
  }
  return (
    <div className='edit-channel__container'>
      <div className='edit-channel__header'>
        <p>Edit Channel</p>
        <CloseCreateChannel setIsEditing={setIsEditing} />
      </div>
      <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />
      <UserList setSelectedUsers={setSelectedUser} />
      <div className='edit-channel__button-wrapper' onClick={updateChannel}>
        <p>Save Changes</p>
      </div>
    </div>
  )
}

export default EditChannel