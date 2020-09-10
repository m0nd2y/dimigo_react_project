import React from "react";


function Music({music}) {
    const { title, singer } = music;
    return (
        <>
        <div>
                <b>{title}</b>({singer})
            </div>
        </>
    )
}

function MusicList({ musicList} ) {
    return (
        <>
            { musicList.map((music) => (
                <Music key={music.id} music={music} />
            ))}
        </>
    )
}


export default MusicList;