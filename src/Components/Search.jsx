import {MdSearch} from 'react-icons/md'
const Search = ({handleSearchNote})=>{

  return(
    <div className="search-container">
        <MdSearch className='search-icons' size='1.3em'/>
        <input type="text" 
               className='search-input'
               placeholder='type here....' 
               onChange={(e)=> handleSearchNote(e.target.value)}
               id="search"
        />
    </div>
  )
}

export default Search;