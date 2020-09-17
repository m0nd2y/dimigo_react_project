import React, { useEffect } from "react";
//import Music2 from "./Music2";


function Music({music, onRemoveMusic, onToggleMusic}) {
    const { id, title, singer, active } = music;
    
    const style = {
        color: active ? "blue" : "black",
        cursor: "pointer"
    };
    useEffect(() => {
        console.log("언제 호출될까?");
    });

    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남");
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
        };
    }, [])

    return (
        <>
        <div>
                <b style={style} onClick={() => onToggleMusic(id)}>{title}</b>({singer})
                <button onClick={() => onRemoveMusic(id)}>삭제</button>
            </div>
        </>
    )
}
function MusicList({ musicList, onRemoveMusic, onToggleMusic} ) {
    return (
        <>
            { musicList.map((music) => (
                <Music key={music.id} music={music} onRemoveMusic={onRemoveMusic} onToggle={onToggleMusic}/>
            ))}
        </>
    )
}


export default MusicList;