import React from "react";

function CreatMusic({ mtitle, director, year, onChangeMovie, onCreateMovie }) {
    return (
        <>
            <input name="mtitle" placeholder = "영화제목" onChange={onChangeMovie} value={mtitle}></input>
            <input name="director" placeholder = "작가" onChange={onChangeMovie} value={director}></input>
            <input name="year" placeholder = "년도" onChange={onChangeMovie} value={year}></input>
            <button onClick={onCreateMovie}>등록</button>
        </>
    )
}


export default CreatMusic;