import { getTrendingMovies } from "@/utils/requests";
import Image from "next/image";
import Landing from "./landingPage";

export default async function App() {

// const movies = await getTrendingMovies();

  return (
    <div>
      <Landing />
    </div>
  );
}
