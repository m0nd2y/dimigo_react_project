import React from "react";

function CreatMusic({ title, singer, onChange, onCreate }) {
    return (
        <>
            <input name="title" placeholder = "노래제목" onChange={onChange} value={title}></input>
            <input name="title" placeholder = "노래제목" onChange={onChange} value={singer}></input>
            <button onClick={onCreate}>등록</button>
        </>
    )
}


export default CreatMusic;