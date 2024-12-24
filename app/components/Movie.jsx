"use client"
import Link from "next/link"
import { useState } from "react";
import { Vidsrc } from "./Vidsrc";

export function MovieGrid({ movieArr }) {
    return (
        <>
            {
                movieArr ?
                    <div className="search-index flex flex-wrap justify-center gap-10">
                        {movieArr.map((movie, idx) => (
                            <Link href={`/movie/${movie.imdbID}`} key={idx}  >
                                <img
                                    className=" w-52 h-full object-cover "
                                    src={movie.Poster}
                                    alt="" />
                            </Link>
                        ))}
                    </div>
                    :
                    <div className="search-index flex flex-wrap justify-center w-full gap-5" >
                        {[...Array(60)].map((_, index) => (
                            <div key={index} className='block flex-grow flex-shrink aspect-[2/3] min-w-[150px] md:min-w-[180px] bg-[#ffffffa9]' />
                        ))}
                    </div>
            }
        </>
    )
}

export function MovieCard({ movieData }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleWatchNow = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };


    const videoSrc = `https://vidsrc.xyz/embed/${movieData.Type == "series"? 'tv' : 'movie' }?imdb=${movieData.imdbID}`; // Replace with actual video URL


    return (
        <div className="flex flex-col w-full" >
            <div className={ isOpen? 'flex relative min-h-[30vh] sm:min-h-[80vh] h-full w-full rounded-2xl mb-5' : '' } >
                { isOpen? <Vidsrc src={videoSrc} /> : null}
            </div>
            {movieData ?
                <>
                    <div className="flex flex-col sm:flex-row w-full rounded-2xl min-h-[8rem] md:min-h-[30rem] bg-gradient-to-bl from-[#1D1D1D] to-[#393939] p-5 ">
                        {/* <div className="block h-full rounded-xl min-w-[10rem] sm:min-w-[15rem] md:min-w-[20rem] aspect-[5/6] md:aspect-[3/4] bg-white shadow-lg py-[auto]"></div> */}
                        <img src={movieData.Poster} alt="" />

                        <div className="flex flex-col justify-center pt-5 sm:pt-0 sm:px-5 gap-2" >
                            <h2 className="text-2xl sm:text-4xl">{movieData.Title} ({movieData.Year})</h2>
                            <p className=" text-[#acacac] mb-4">
                                {movieData.Plot}
                            </p>
                            <div className="flex flex-col sm:flex-row">
                                <button onClick={handleWatchNow} className="bg-white text-black px-6 py-2 mb-3 sm:mb-0 sm:mr-3">Watch Now</button>
                                <button onClick={() => {/* handle save for later */ }} className="bg-black text-white px-6 py-2">Save For Later</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="flex flex-col sm:flex-row w-full rounded-2xl min-h-[8rem] md:min-h-[30rem] bg-gradient-to-bl from-[#1D1D1D] to-[#393939] p-5 ">
                    <div className="block h-full rounded-xl min-w-[10rem] sm:min-w-[15rem] md:min-w-[20rem] aspect-[5/6] md:aspect-[3/4] bg-white shadow-lg py-[auto]"></div>

                    <div className="flex flex-col justify-center pt-5 sm:pt-0 sm:px-5 gap-2" >
                        <h2 className="text-2xl sm:text-4xl">Title Of The Movie</h2>
                        <p className=" text-[#acacac] mb-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident non nisi quo ullam eligendi molestias?
                        </p>
                        <div className="flex flex-col sm:flex-row">
                            <button className="bg-white text-black px-6 py-2 mb-3 sm:mb-0 sm:mr-3">Watch Now</button>
                            <button className="bg-black  px-6 py-2">Save For Later</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}