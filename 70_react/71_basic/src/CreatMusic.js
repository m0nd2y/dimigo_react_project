import React, { useRef, useContext } from "react";
import { MusicContext } from "./MusicReducerApp"

function CreatMusic({ title, singer }) {

    const dispatch = useContext(MusicContext)

    const onChangeMusic = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE",
            name,
            value
        })
    };

    const nextId = useRef(4);

    const onCreateMusic = () => {
        dispatch({
            type: "CREATE",
            music: {
                id: nextId.current,
                title,
                singer
            }
        })
        nextId.current += 1;

    };

    return (
        <>
            <input name="title" placeholder="노래제목" onChange={onChangeMusic} value={title}></input>
            <input name="singer" placeholder="노래제목" onChange={onChangeMusic} value={singer}></input>
            <button onClick={onCreateMusic}>등록</button>
        </>
    )
}


export default CreatMusic;
