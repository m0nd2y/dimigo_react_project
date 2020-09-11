import React from "react";


function Music({music, onRemoveMusic, onToggleMusic}) {
    const { id, title, singer, active } = music;
    
    const style = {
        color: active ? "blue" : "black",
        cursor: "pointer"
    }

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