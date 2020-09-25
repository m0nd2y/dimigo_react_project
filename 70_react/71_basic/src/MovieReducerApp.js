import React, { useRef, useReducer, createContext } from "react";
import "./App.css";
import MovieList from "./MovieList";
import CreatMovie from "./CreatMovie";

const initialState = {
    movie : {
        mtitle:"",
        director:"",
        year:"",
        active:false,
    },
  movieList:[
    { id: 1, mtitle: "스타워즈", director: "조지 루카스", year: "1977" , atcive: false},
    { id: 2, mtitle: "아바타", director: "제임스 카메론", year: "2009" , atcive: false},
    { id: 3, mtitle: "인터스텔라", director: "크리스토퍼 놀란", year: "2014" , atcive: false},
    ]
}

function reducer(state, action) {
    switch(action.type) {
        case "CHANGE" :
            return {
                ...state,
                movie: {
                    ...state.movie,
                    [action.name] : action.value
                }
            };
        case "CREATE" :
            console.log("hihihihih")
            return {
                movieList: state.movieList.concat({
                    ...state.movie,
                    id : action.movie.id,
                    active : false
                }),
                movie: initialState.movie
            };
        case "REMOVE" :
            return {
                ...state,
                movieList : state.movieList.filter(movie => movie.id !== action.id)
            };
        case "TOGGLE" :
            return {
                ...state,
                movieList: state.movieList.map(
                    movie => movie.id === action.id ?
                    {...movie, active: !movie.active}:movie)
            };
        default :
            throw new Error("Unhandled action");
    }
}

export const MovieContext = createContext(null)

function MovieReducerApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { mtitle, director, year } = state.movie;
  const { movieList } = state;


  return (
    <>
      <MovieContext.Provider value={dispatch}>
        <CreatMovie
            mtitle={mtitle}
            director={director}
            year={year}
        />
      <MovieList
        movieList={movieList}
      />
      </MovieContext.Provider>
    </>
  );
} 
export default MovieReducerApp;