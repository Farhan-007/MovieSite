import { MovieGrid } from "../components/Movie";
import SideBar from "../components/SideBar";

export default function DiscoverPage() {
    return (
        <>

            <div className="relative min-h-screen flex items-center">
                <div className="fixed z-0 inset-0 h-full w-full ">
                    <span className="bg-[#0000009f] absolute bg-blend-screen h-full w-full"> </span>
                    <img className=" h-full w-full object-cover" src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg" alt="" />
                </div>
                <div className="z-10 flex flex-col text-white p-5 md:p-10">
                    {/* <div className="block min-w-min bg-white"> */}
                        {/* <SideBar /> */}
                    {/* </div> */}
                    <div className="filter-buttons"></div>
                    <MovieGrid />
                </div>
            </div>
        </>
    )
}