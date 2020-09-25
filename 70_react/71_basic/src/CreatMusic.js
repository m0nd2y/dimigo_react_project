import React, {useContext} from "react";
import { MusicContext } from "./MusicReducerApp"

function CreatMusic({ title, singer }) {

    const dispatch = useContext(MusicContext)
    
    return (
        <>
            <input name="title" placeholder = "노래제목" onChange={onChangeMusic} value={title}></input>
            <input name="singer" placeholder = "노래제목" onChange={onChangeMusic} value={singer}></input>
            <button onClick={onCreateMusic}>등록</button>
        </>
    )
}


export default CreatMusic;
