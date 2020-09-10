import React from "react";

function MusicList() {

    const musicList = [
        { id: 1, singer: "아이유", title: "eight" },
        { id: 2, singer: "폴킴", title: "Hero" },
        { id: 3, singer: "장범준", title: "실버판테온" },
    ];

    return (
        <>
            <div>
                <b>{musicList[0].title}</b>({musicList[0].singer})
            </div>
            <div>
                <b>{musicList[1].title}</b>({musicList[1].singer})
            </div>
            <div>
                <b>{musicList[2].title}</b>({musicList[2].singer})
            </div>
        </>
    )
}


export default MusicList;