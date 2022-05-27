const SearchBox = ({searchField,searchChange})=>{
    return (
        <div className="pa2">
            <input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search for my bots' />
        </div>
    )
}
export default SearchBox