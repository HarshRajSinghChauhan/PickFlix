import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function MoreInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieData = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=eb1faf9a`
      );
      const data = await res.json();
      setMovie(data);
    };
    movieData();
  }, [id]);

  if (!movie)
    return <p className="text-center mt-10 text-white">Loading...</p>;

  return (
    <div className="p-4 flex justify-center">
      <div className="bg-neutral-800 text-neutral-100 rounded-xl shadow-2xl p-6 max-w-5xl w-full flex flex-col md:flex-row gap-8">

        <div className="flex justify-center md:w-1/3">
          <img
            src={movie?.Poster}
            alt={movie.Title}
            className="w-64 md:w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="md:w-2/3 flex flex-col justify-between">

          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p className="text-neutral-300">{movie.Year} • {movie.Rated}</p>
            <p className="text-neutral-300">{movie.Released}</p>
            <p className="text-neutral-300">{movie.Runtime}</p>
            <p className="text-neutral-300">{movie.Genre}</p>

            <div className="space-y-2 text-sm">
              <p><span className="font-semibold text-neutral-100">Director:</span> {movie.Director}</p>
              <p><span className="font-semibold text-neutral-100">Actors:</span> {movie.Actors}</p>
              <p><span className="font-semibold text-neutral-100">Plot:</span> {movie.Plot}</p>
            </div>

            <div className="bg-neutral-700 p-4 rounded-lg shadow-inner space-y-1">
              <p className="font-semibold text-neutral-100">Ratings:</p>
              <p>⭐ IMDB: {movie?.Ratings?.[0]?.Value || "N/A"}</p>
              <p>🍅 Rotten Tomatoes: {movie?.Ratings?.[1]?.Value || "N/A"}</p>
              <p>🎯 Metacritic: {movie?.Ratings?.[2]?.Value || "N/A"}</p>
            </div>

            <p className="font-semibold mt-2">
              Box Office: <span className="font-normal">{movie.BoxOffice}</span>
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-lg transition"
            >Back to Home 🏠
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MoreInfo;