import React, { useEffect, useMemo } from "react";

function Movie({movie, onRemoveMovie, onToggleMovie}) {
    const { id, mtitle, director, year, active } = movie;

    const style = {
        color: active ? "blue" : "black",
        cursor: "pointer"
    }
/*
    useEffect(() => {
        console.log("언제 호출될까?");
    });
*/
    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남");
        return () => {
            console.log("컴포넌트가 화면에서 사라짐", movie);
        };
    }, [movie])

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
    const countActiveMovie = () => {
        console.log("Active 개수 세기");
        return  movieList.filter((movie) => movie.active).length;
    };
    const count = useMemo(countActiveMovie, [movieList]);
    
    return (
        <>
            { movieList.map((movie) => (
                <Movie key={movie.id} movie={movie} onRemoveMovie={onRemoveMovie} onToggleMovie={onToggleMovie}/>
            ))}
            <hr />
            <div>Active 된 Movie 수 : {count} </div>
        </>
    )
}


export default MovieList;