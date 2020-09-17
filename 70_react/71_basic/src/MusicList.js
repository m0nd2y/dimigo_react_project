import React, { useEffect, useMemo } from "react";
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
            console.log("컴포넌트가 화면에서 사라짐", music);
        };
    }, [music])

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
    const countActiveMusic = () => {
        console.log("Active 개수 세기");
        return  musicList.filter((music) => music.active).length;
    };
    const count = useMemo(countActiveMusic, [musicList]);
    
    return (
        <>
            { musicList.map((music) => (
                <Music key={music.id} music={music} onRemoveMusic={onRemoveMusic} onToggleMusic={onToggleMusic}/>
        ))}
        <hr />
        <div>Active 된 Music 수 : {count} </div>
        </>
    )
}


export default MusicList;