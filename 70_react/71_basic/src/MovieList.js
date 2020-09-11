import React from "react";

function Movie({movie, onRemoveMovie, onToggleMovie}) {
    const { id, mtitle, director, year, active } = movie;

    const style = {
        color: active ? "blue" : "black",
        cursor: "pointer"
    }

    return (
        <>
        <div>
            <b style={style} onClick={()=> onToggleMovie(id)}>{mtitle}</b>({director}, {year})
            <button onClick={() => onRemoveMovie(id)}>삭제</button>
        </div>
        </>
    )
}

function MovieList({ movieList, onRemoveMovie, onToggleMovie}) {
    return (
        <>
            { movieList.map((movie) => (
                <Movie key={movie.id} movie={movie} onRemoveMovie={onRemoveMovie} onToggleMovie={onToggleMovie}/>
            ))}
        </>
    )
}


export default MovieList;