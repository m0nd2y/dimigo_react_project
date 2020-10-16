import React, { useEffect, useState } from "react";
import { useAsync } from "react-async";
import Movie from "./Movie";
import { getMovieList } from "./api";

function MovieList() {
    const [id, setId] = useState(null);
    const { data: movieList, error, isLoading, reload } = useAsync({
        promiseFn: getMovieList
    });

    // 화면이 마운트될 때만 실행
    useEffect(() => {
        getMovieList();
    }, []);

    if (isLoading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!movieList) return null;

    return (
        <>
            <ul>
                {movieList.map(movie => (
                    <li key={movie.id} onClick={()=>setId(movie.id)} style={{cursor:"pointer"}}>
                        {movie.title}({movie.director})
                    </li>
                ))}
            </ul>
            <button onClick={reload}>불러오기</button>
            {id && <Movie id={id} />}
        </>
    )
}

export default MovieList;