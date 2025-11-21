import { useState } from "react";

function SearchBar() {

    const [type, setType] = useState('movies');
    const [searchText, setSearchText] = useState(null)
    const [search, setSearch] = useState(null);

    const submitSearch = () =>{

    }
    return (

        <div className="md:m-0 flex flex-col justify-center md:flex-row ">
            {
                console.log(search)
            }

            <div className='p-4 flex justify-center'>
                <input
                    onChange={(e)=> setSearch((e.target.value).toLowerCase())}
                    className='w-46 bg-neutral-600 border-blue-500 border p-2 rounded-4xl rounded-r-none lg:w-100 text-white font-medium'
                    type='text'
                    placeholder={`Search ${type}`} />

                <button
                    onClick={submitSearch}
                    className='p-2  bg-blue-500 cursor-pointer
                    rounded-4xl rounded-l-none border-blue-500 border text-white font-medium
                    lg:w-18'
                    >Search</button>
            </div>

            <div className='p-4 flex justify-center'>
                <button
                    onClick={() => setType('movies')}
                    className={` font-medium text-white p-2 w-18 border-0 rounded-l-3xl cursor-pointer
                    ${type == 'movies' ? "bg-blue-500 border ": " bg-neutral-600 "}}`}
                >Movies
                </button>
                
                <button
                    onClick={() => setType('series')}
                     className={` font-medium text-white p-2 w-18 border-0 rounded-r-3xl cursor-pointer
                    ${type == 'series' ? "bg-blue-500 " : " bg-neutral-600 "}}`}
                >Series
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
