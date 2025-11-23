import { useEffect, useState } from 'react'
import Card from './Card'

function CardsTab({ searchTerm, type }) {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        if (!searchTerm) return;

        const getData = async () => {
            const url = `https://www.omdbapi.com/?s=${searchTerm}&type=${type}&apikey=eb1faf9a`;

            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovieData(data.Search || []);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, [searchTerm, type]);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {movieData.map((movie) => (
                <Card key={movie.imdbID} data={movie} />
            ))}
        </div>
    );
}

export default CardsTab
