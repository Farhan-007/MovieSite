"use client"
import { useState } from 'react';
import { getMovies } from '@/utils/requests';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MovieSearch = () => {
    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSearch = async () => {
        setError('');
        const result = await getMovies(search);
        if (result && result.Response === 'True') {
            setMovie(result.Search);
            console.log(movie)
        } else {
            setError(result ? result.Error : 'An error occurred');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // handleSearch(); 
            router.push(`/discover/${search}`);
        }
    };

    return (
        <div>
            <div>
                <input
                    className="py-2 text-black mb-3"
                    type="text"
                    placeholder="Enter movie title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div>
                <Link href={`/discover/${search}`}>

                    <button className="bg-black px-6 py-2" onClick={handleSearch}>Search</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieSearch;
