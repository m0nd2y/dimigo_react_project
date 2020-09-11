import React from "react";

function Movie({movie, onRemoveMovie}) {
    const { id, mtitle, director, year } = movie;
    return (
        <>
        <div>
            <b>{mtitle}</b>({director}, {year})
            <button onClick={() => onRemoveMovie(id)}>삭제</button>
        </div>
        </>
    )
}

function MovieList({ movieList, onRemoveMovie}) {
    return (
        <>
            { movieList.map((movie) => (
                <Movie key={movie.id} movie={movie} onRemoveMovie={onRemoveMovie}/>
            ))}
        </>
    )
}


export default MovieList;