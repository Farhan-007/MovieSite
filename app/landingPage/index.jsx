import MovieSearch from "../components/MovieSearch"

export default function Landing() {
    return (
        <div className="relative min-h-screen flex items-center">
            <div className="fixed z-0 inset-0 h-full w-full ">
                <span className="bg-[#0000009f] absolute bg-blend-screen h-full w-full"></span>
                <img className=" h-full w-full object-cover" src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg" alt="" />
            </div>
            <div className="absolute z-1 flex flex-col justify-center h-full gap-3 p-6 px-12 md:px-24 text-white  " >
                <h1 className="text-8xl font-semibold -ml-2">PirateMov</h1>
                <p className="text-2xl">
                    watch all your movies in one place
                </p>
                {/* <div>
                    <input type="text" placeholder='search movie here' className=" py-2 text-black  " />
                </div>
                <div>
                    <button className="bg-black px-6 py-2">Search</button>
                </div> */}
                <MovieSearch />
            </div>
        </div>
    )
}