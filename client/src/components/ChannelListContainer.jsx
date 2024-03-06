import React , { useState } from 'react'
import { ChannelList , useChatContext } from "stream-chat-react";
import Cookies from 'universal-cookie';
import { CiHospital1 } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import {  ChannelSearch , TeamChannelList, TeamChannelPreview } from './'
import { CgProfile } from "react-icons/cg";
import { AiOutlineBars } from 'react-icons/ai'


const SideBar = ()=>{

  const cookies = new Cookies;

  const logOut = ()=>{
    cookies.remove("token")
    cookies.remove("userName")
    cookies.remove("userId")
    cookies.remove("fullName")
    cookies.remove("phoneNumber")
    cookies.remove("avatarUrl")
    cookies.remove("hashedPassword")
    window.location.reload();
  }

  const profile = ()=> {
    setIsProfileToggled((prev)=>!prev);
    setToggleContainer((prev)=>!prev);
  }


  return(
    <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
      <CiHospital1 />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon2__inner' onClick={logOut}>
      <IoIosLogOut />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon2__inner' onClick={profile}>
      <CgProfile />
      </div>
    </div>
  </div>
  )
  
}

const CompanyHeader = ()=> { 
  return (
    <div className='channel-list__header'>
      <p className='channel-list__header__text'>Medical Pager</p>
    </div>
  )
}

const customChannelTeamFilter = (channels)=>{
  return channels.filter((channel)=>channel.type=== 'team')
}

const customChannelMessageFilter = (channels)=>{
  return channels.filter((channel)=>channel.type === 'messaging')
}


const ChannelListContent = ({isCreating ,  setCreateType, setIsCreating, setIsEditing , setToggleContainer }) => {
 const { client } = useChatContext();

 const filters = { members : { $in :  [client.userID] } };

  return (
    <>
    <SideBar />
    <div className='channel-list__list__wrapper'>
    <CompanyHeader /> 
    <ChannelSearch  />
    <ChannelList 
    filters={filters}
    channelRenderFilterFn={(channel)=>{customChannelTeamFilter(channel)}}
    List={(listProps)=>{ 
      return (
      <TeamChannelList 
      {...listProps}
      type="team"
      isCreating = {isCreating}
      setIsCreating= {setIsCreating} 
      setCreateType = {setCreateType} 
      setIsEditing = {setIsEditing}
      setToggleContainer={setToggleContainer}
      />
    )}}
    Preview={(previewProps)=>(
      <TeamChannelPreview 
      {...previewProps}
      setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}   
                            setToggleContainer={setToggleContainer}                   
      type="team"
      />
    )}
    />
    <ChannelList 
    filters={filters}
    channelRenderFilterFn={(channel)=>{customChannelMessageFilter(channel)}}
    List={(listProps)=>(
      <TeamChannelList 
      {...listProps}
      type="messaging"
      isCreating = {isCreating}
      setIsCreating= {setIsCreating} 
      setCreateType = {setCreateType} 
      setIsEditing = {setIsEditing}
      setToggleContainer={setToggleContainer}
      />
    )}
    Preview={(previewProps)=>(
      <TeamChannelPreview 
      {...previewProps}
      setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
      
      type="messaging"
      />
    )}
    />
    
    </div>
    
    </>
  )

}

const ChannelListContainer = ({setCreateType , setIsCreating , setIsEditing })=>{
  const [toggleConatiner , setToggleContainer] = useState(false);

  return (
    <>
    <div className='channel-list__container'>
      <ChannelListContent setIsCreating={setIsCreating} setCreateType={setCreateType} setIsEditing={setIsEditing} setToggleContainer={setToggleContainer} />
      </div>
      
      <div className='channel-list__container-responsive'
      style={{ left : toggleConatiner ? "0%" : "-79%" , backgroundColor : "#005fff"}}
      >
        <div className='channel-list__container-toggle' onClick={()=> setToggleContainer((prevState)=> !prevState)} >
          <AiOutlineBars color='white' fontWeight='bold' /></div>
          <ChannelListContent setIsCreating={setIsCreating} setIsEditing={setIsEditing} setCreateType={setCreateType} setToggleContainer={setToggleContainer} />
        
      </div>
      </>
  )
}

export default ChannelListContainer
