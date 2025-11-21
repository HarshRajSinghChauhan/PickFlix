
import { useEffect, useState } from 'react'
import Card from './Card'

function CardsTab() {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://www.omdbapi.com/?s=avengers&apikey=eb1faf9a');
                const data = await res.json();
                setMovieData(data.Search || []);
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        };
        getData();
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center my-4">
            {movieData.map((movie, index) => (
                <Card key={index} data={movie} />
            ))}
        </div>
    )
}

export default CardsTab
