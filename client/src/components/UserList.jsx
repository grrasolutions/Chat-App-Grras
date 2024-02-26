import React from 'react'
import  { Avatar , useChatContext } from 'stream-chat-react';
import { InviteIcon } from '../assets/InviteIcon';



const ListConatiner = ({children})=>{
    return (
        <div className='user-list__conatiner'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = ()=>{
    return (
        <div className='user-eitem__wrapper'>
            <div className='user-itam__name-wrapper'>
                <Avatar />
            </div>
        </div>
    )
}

const UserList = () => {
  return (
    <ListConatiner>

    </ListConatiner>
  )
}

export default UserList