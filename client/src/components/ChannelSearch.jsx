import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

const ChannelSearch = () => {
  const [query , setQuery] = useState('');
  const [loading , setLoading] = useState(false);

  const getChannels = async ()=>{
    try{
      // TO DO
    }
    catch(error){
      setQuery('');
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
            <IoSearch />
            </div>
            <input type="text" className='channel-search__input__text' placeholder='Search' value={query} onChange={onSearch} />
        </div>
    </div>
  )
}

export default ChannelSearch