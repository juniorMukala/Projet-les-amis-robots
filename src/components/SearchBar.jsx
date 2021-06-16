import React from 'react';
const SearchBar = ({onchange}) => {
  const change=(event)=>{
     onchange(event.target.value)
  }
  return (
    <div className='search'>
      <input type="text" placeholder='nom' onChange={change}/>
    </div>
  );
};

export default SearchBar;