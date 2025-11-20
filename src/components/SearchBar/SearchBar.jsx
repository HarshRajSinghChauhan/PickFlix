import { useState } from "react";

function SearchBar() {

    const [type, setType] = useState('movies');

    const handleClick = (data) => {
        setType(data);
    }
    return (

        <div className="flex justify-center">
            <div className='p-4'>
                <input
                    className='bg-neutral-600 border-blue-500 border p-2 rounded-4xl rounded-r-none w-100 text-white font-medium'
                    type='text'
                    placeholder='Search Movies or Series here.' />

                <button
                    className='p-2 w-18 bg-blue-500 cursor-pointer
          rounded-4xl rounded-l-none border-blue-500 border text-white font-medium'>Search</button>
            </div>
            <div className='p-4'>
                <button
                    onClick={() => handleClick('movies')}
                    className={` font-medium text-white p-2 w-18 border-0 rounded-l-3xl
                    ${type == 'movies' ? "bg-blue-500 border ": " bg-neutral-600 "}}`}
                >Movies
                </button>
                
                <button
                    onClick={() => handleClick('series')}
                     className={` font-medium text-white p-2 w-18 border-0 rounded-r-3xl
                    ${type == 'series' ? "bg-blue-500 ": " bg-neutral-600 "}}`}
                >Series
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
