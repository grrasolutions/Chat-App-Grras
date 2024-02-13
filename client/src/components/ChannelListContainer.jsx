import React from "react";
import { ChannelSearch , SideBar, TeamChannelList, TeamChannelPreview } from './';
import { ChannelList , useChatContext } from "stream-chat-react";


const CompanyHeader = ()=>{
  return (
    <div>
    <p>Chat Application</p>
  </div>
  )
  
}


const ChannelListContainer = () => {

  


  return (
    <div className="h-screen bg-gray-800 flex">
      <div className="w-20">
      <SideBar />
      </div>
      
      <div className="text-white">
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
            type="message"/>
          )
        }}
        Preview={(previewProps)=>{
          return (
            <TeamChannelPreview {...previewProps} 
            type="message"/>
          )
        }} />
      </div>
    </div>
  );
};

export default ChannelListContainer;
