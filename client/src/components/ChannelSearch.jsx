import React ,  { useEffect , useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import { CiSearch } from "react-icons/ci";



function ChannelSearch() {

    

    const [query , setQuery] = useState('');
    const [loading , setLoading] = useState(false)

    
 
    const getChannels = async (text) => {
        try {
            
        } catch (error) {
            
        }
    }
    const onSearch = (e)=>{
        e.preventDefault();
        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value);
    }

    
  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
            <CiSearch />
            </div>
            <input type="text" className='channel-search__input__text' placeholder='Search' value={query} onChange={onSearch} />
        </div>
        
    </div>
  )
}

export default ChannelSearch