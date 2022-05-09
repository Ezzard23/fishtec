import React, { useState } from 'react'



function SearchBar(props) {
    const {onSearch} = props;

    const [searchText,setSearchText] = useState('');
    
    const handleInput = (e) => {
      const text = e.target.value;
      setSearchText(text);
      console.log(searchText);
    }
  
    const handleEnterKey = (e) => {
        if(e.key === 'Enter'){
          onSearch(searchText);
        }
    }


    return(
<div className='search'>
<form className='searchbar' action="action_page.php">
  <select className="filter" id="lang">
    <option value="IP Address">IP Address</option>
    <option value="Domain">Domain</option>
  </select>
  <input className='searchtext' type="text" placeholder="I've Lost My IP Address" name="search" onChange={handleInput} value = {searchText} onKeyPress = {handleEnterKey}/>
  <button type='submit' className='search-btn'><i className='fa fa-search'></i></button>
</form>

</div>
    );
}

export default SearchBar;