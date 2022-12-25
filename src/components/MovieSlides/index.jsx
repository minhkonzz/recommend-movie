import { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { slidesReducer, initialState } from "../../reducers/movieslides.reducer";
import { setMovies } from "../../store/memory.reducer";
import { fetchOnce } from "../../functions/fetch";
import MovieSlide from "../MovieSlide";
import "../../styles/movieSlides.scss";

export default function MovieSlides() {

  const reduxDispatch = useDispatch();
  const movies = useSelector((state) => state.memory.movies);
  const [ state, contextDispatch ] = useReducer(slidesReducer, initialState); 

  useEffect(() => {
    fetchOnce("https://630fa0ec498924524a92aac4.mockapi.io/movies")
      .then((movies) => { 
        reduxDispatch(setMovies(movies))
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    movies && 
    <div className="slides">
      <button onClick={() => contextDispatch({ type: "PREV" })}>
        <ion-icon name="chevron-back" />
      </button>
      {[...movies, ...movies, ...movies].map((movie, i) => {
        let offset = movies.length + (state.slideIndex - i);
        return <MovieSlide movie={movie} offset={offset} key={i} />;
      })}
      <button onClick={() => contextDispatch({ type: "NEXT" })}>
        <ion-icon name="chevron-forward" />
      </button>
    </div>
  )
}