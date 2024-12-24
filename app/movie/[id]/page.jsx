import { getMovieDetails, getMovies } from "@/utils/requests";
import { MovieCard, MovieGrid } from "@/app/components/Movie";

async function MoviePage({ params }) {

    const MovieDetails = await getMovieDetails(params.id)
    console.log(MovieDetails)

    return (
        <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-5 md:gap-10">
            <MovieCard movieData={MovieDetails} />
            {/* <div className="flex relative h-52 w-52">

                <iframe
                    src={`https://vidsrc.xyz/embed/movie?imdb=${params.id}`}

                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                    allowFullScreen
                />
            </div> */}
            {/* <Mo
            vieGrid movieArr={movies.Search}/> */}
        </div>
    )
}

export default MoviePage