function Card({ data }) {

    if (!data) return null;

    return (
        <div className="w-68 bg-white shadow-xl rounded-lg p-3 m-3 shadow-pink-400 
        hover:shadow-pink-800 transition-all duration-900 hover:scale-105 hover:ease-in-out transform-gpu ">

            <div className="w-full h-40 overflow-hidden rounded">
                <img
                    src={data.Poster}
                    alt={data.Title}
                    className="w-full h-full object-cover"
                />
            </div>

            <h2 className="text-sm font-semibold mt-2 line-clamp-2">
                {data.Title}
            </h2>

            {/* <p className="text-gray-600 text-xs mt-1">
                IMDB Rating: {data?.Ratings?.[0]?.Value}<span className=" text-yellow-500 font-extrabold"> ★</span>
            </p> */}

            <p className="text-gray-600 text-xs mt-1">
                {data.Year} • {data.Type}
            </p>

            <div className="flex justify-center pt-2 pb-0">
                <button className=" bg-blue-600 hover:bg-blue-700 text-white w-full p-1 cursor-pointer">More Info</button>
            </div>

        </div>
    );
}

export default Card;

 