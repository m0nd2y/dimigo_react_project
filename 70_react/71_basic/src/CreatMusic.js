import React from "react";

function CreatMusic({ onChange }) {
    return (
        <>
            <input name="title" placeholder = "노래제목" onChange={onChange}></input>
            <input name="title" placeholder = "노래제목" onChange={onChange}></input>
            <button>등록</button>
        </>
    )
}


export default CreatMusic;