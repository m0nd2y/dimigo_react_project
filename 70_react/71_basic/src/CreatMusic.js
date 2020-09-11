import React from "react";

function CreatMusic({ title, singer, onChangeMusic, onCreateMusic }) {
    return (
        <>
            <input name="title" placeholder = "노래제목" onChange={onChangeMusic} value={title}></input>
            <input name="singer" placeholder = "노래제목" onChange={onChangeMusic} value={singer}></input>
            <button onClick={onCreateMusic}>등록</button>
        </>
    )
}


export default CreatMusic;