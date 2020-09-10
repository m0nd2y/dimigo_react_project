import React from "react";

function Movie({movie}) {
    const { title, director, year } = movie;
    return (
        <>
        <div>
            <b>{title}</b>({director}, {year})
        </div>
        </>
    )
}

function MovieList() {
    const movieList = [
        { id: 1, title: "스타워즈", director: "조지 루카스", year: "1977" },
        { id: 2, title: "아바타", director: "제임스 카메론", year: "2009" },
        { id: 3, title: "인터스텔라", director: "크리스토퍼 놀란", year: "2014" },
    ];
    return (
        <>
            { movieList.map((movie) => (
                <Movie movie={movie} />
            ))}
        </>
    )
}


export default MovieList;