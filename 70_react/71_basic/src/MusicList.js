import React from "react";


function Music({music, onRemove}) {
    const { id, title, singer } = music;
    return (
        <>
        <div>
                <b>{title}</b>({singer})
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </>
    )
}

function MusicList({ musicList, onRemove} ) {
    return (
        <>
            { musicList.map((music) => (
                <Music key={music.id} music={music} onRemove={onRemove}/>
            ))}
        </>
    )
}


export default MusicList;