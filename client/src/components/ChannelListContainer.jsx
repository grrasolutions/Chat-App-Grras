import React from "react";
import { ChannelSearch ,  TeamChannelList, TeamChannelPreview } from './';
import { ChannelList , useChatContext } from "stream-chat-react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Cookies from "universal-cookie";


const CompanyHeader = ()=> { 
  return (
    <div className='channel-list__header'>
      <p className='channel-list__header__text'>Chat Application</p>
    </div>
  )
}

const SideBar = () => {

  const cookies = new Cookies();
  const handleLogOut =  ()=>{
    cookies.remove("token");
    cookies.remove("userName");
    cookies.remove("fullName");
    cookies.remove("phoneNumber");
    cookies.remove("hashedPassword");
    cookies.remove("avatarUrl");
    window.location.reload();
  }
  
    return(
      <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
          <div className='icon1__inner'><IoHomeOutline /></div>
        
        </div>
      <div className='channel-list__sidebar__icon2' >
        <div className='icon2__inner' onClick={handleLogOut}><IoIosLogOut /></div>
        
      
      </div> 
      <div className='channel-list__sidebar__icon2'>
        <div className='icon2__inner'>
        <CgProfile />
        </div>
      
      </div>
      
    </div>
    )
    
  };


const ChannelListContainer = () => {

  return (
    <>
      <SideBar />
      
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList 
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>{
          return (
            <TeamChannelList {...listProps}
            type="team"/>
          )
        }}
        Preview={(previewProps)=>{
          return (
            <TeamChannelPreview {...previewProps} 
            type="team"/>
          )
        }} />
        <ChannelList 
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>{
          return (
            <TeamChannelList {...listProps}
            type="messaging"/>
          )
        }}
        Preview={(previewProps)=>{
          return (
            <TeamChannelPreview {...previewProps} 
            type="messaging"/>
          )
        }} />
      </div>
    </>
  );
};

export default ChannelListContainer;
