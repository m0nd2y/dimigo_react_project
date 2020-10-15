import React, { useReducer, useEffect } from "react";
import axios from "axios";

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


function Music({id}) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchData = async (id) => {
        dispatch({ type: "LOADING" });
        try {
            // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
            const response = await axios.get(`http://localhost:5000/musicList/${id}`);
            dispatch({ type: "SUCCESS", data:response.data });
        } catch (e) {
            console.log(e.response.status);
            dispatch({ type: "ERROR", error: e });
        }
    }



    // 화면이 마운트될 때만 실행
    useEffect(() => {
        fetchData(id);
    }, [id]);

    const { loading, data:music, error } = state;

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!music) return null;

    return (
        <>
            <h3>{music.title}</h3>
            <div>{music.singer}</div>
        </>
    )
}

export default Music;