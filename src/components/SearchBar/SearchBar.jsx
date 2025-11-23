import { useState } from "react";

function SearchBar({ setSearchTerm, setType }) {

    const [typeLocal, setTypeLocal] = useState('movie');

    const updateType = (value) => {
        setTypeLocal(value);
        setType(value); // update Home.jsx
    };

    return (
        <div className="md:m-0 flex flex-col justify-center md:flex-row">

            <div className='p-4 flex justify-center'>
                <input
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    className='w-46 bg-neutral-600 border-blue-500 border p-2 rounded-4xl rounded-r-none lg:w-100 text-white font-medium'
                    type='text'
                    placeholder={`Search ${typeLocal}`}
                />

                <button
                    className='p-2 bg-blue-500 cursor-pointer
          rounded-4xl rounded-l-none border-blue-500 border text-white font-medium lg:w-18'>
                    Search
                </button>
            </div>

            <div className='p-4 flex justify-center'>
                <button
                    onClick={() => updateType('movie')}
                    className={`font-medium text-white p-2 w-18 rounded-l-3xl 
            ${typeLocal === 'movie' ? "bg-blue-500" : "bg-neutral-600"}`}>
                    Movies
                </button>

                <button
                    onClick={() => updateType('series')}
                    className={`font-medium text-white p-2 w-18 rounded-r-3xl
            ${typeLocal === 'series' ? "bg-blue-500" : "bg-neutral-600"}`}>
                    Series
                </button>
            </div>
        </div>
    );
}

export default SearchBar;