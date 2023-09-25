import { useState, useEffect } from "react";
import "./App.css";
import { getMovieList } from "./api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);
  console.log(getMovieList());
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      const posterUrl = `${"https://image.tmdb.org/t/p/original/"}${movie.poster_path}`;
      return (
        <div key={i} className="">
          <div className="bg-white shadow-xl w-52 border border-gray-200 rounded-lg ">
            <a href="#">
              <img className="rounded-t-lg" src={posterUrl} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">{movie.title}</h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">{movie.release_date}</p>
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                {movie.vote_average}
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex m-5 items-center max-w-md mx-auto border bg-white rounded-lg " x-data="{ search: '' }">
        <div className="w-full">
          <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none" placeholder="search" x-model="search" />
        </div>
        <div>
          <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="mx-auto flex-wrap flex flex-row gap-1">
        <PopularMovieList />
      </div>
    </>
  );
}

export default App;
