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

function MusicList() {
    const musicList = [
        { id: 1, singer: "아이유", title: "eight" },
        { id: 2, singer: "폴킴", title: "Hero" },
        { id: 3, singer: "장범준", title: "실버판테온" },
    ];
    return (
        <>
            { musicList.map((music) => (
                <Music music={music} />
            ))}
        </>
    )
}


export default MusicList;