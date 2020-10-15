import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

// LOADING, SUCCESS, ERROR
function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}


function MovieList() {
    const [id, setId] = useState(null);
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchData = async () => {
        dispatch({ type: "LOADING" });
        try {
            // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
            const response = await axios.get("http://localhost:5000/movieList");
            dispatch({ type: "SUCCESS", data:response.data });
        } catch (e) {
            //console.log(e.response.status);
            dispatch({ type: "ERROR", error: e });
        }
    }



    // 화면이 마운트될 때만 실행
    useEffect(() => {
        fetchData();
    }, []);

    const { loading, data:movieList, error } = state;

    if (loading) return <div>로딩중...</div>;
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
            <button onClick={fetchData}>불러오기</button>
            {id && <Movie id={id} />}
        </>
    )
}

export default MovieList;