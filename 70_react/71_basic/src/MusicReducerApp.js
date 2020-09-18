import React, { useRef, useReducer } from "react";
import Hello from "./Hello";
import Hello2 from "./Hello2";
import "./App.css";
import State from "./State";
import StateSample2 from "./StateSample2";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";
import MusicList from "./MusicList";
import MovieList from "./MovieList";
import CreateMovie from "./CreateMovie";
import CreatMusic from "./CreatMusic";

setMovieList
const initialState = {
    music : {
        title:"",
        singer:"",
        actvive:false,
    },
  musicList:[
        {id: 1, singer: "아이유", title: "eight", active: false },
        { id: 2, singer: "폴킴", title: "Hero", active: false },
        {  id: 3, singer: "장범준", title: "실버판테온", active: false },
    ]
}

function reducer(state, action) {
    switch(action.type) {
        case "CHANGE" :
            return state;
        case "CREATE" :
            return state;
        case "RESET" :
            return state;
        case "TOGGLE" :
            return state;
        default :
            throw new Error("Unhandled action");
    }
}

function MusicReducerApp() {
  const [music, dispatch] = useReducer(reducer, initialState.music)

  const { title, singer } = music;

  const onChangeMusic = (e) => {
    const { name, value } = e.target;
    dispatch({
        type : "CHANGE",
        name,
        value
        })
    };

  const nextId = useRef(4);
  const onCreateMusic = () => {
    dispatch({
        type : "CREATE",
        ...music,
        id: nextId.current,
    })

    nextId.current += 1;
    dispatch({
        type : "RESET"
    });
  };
  const onRemoveMusic = (id) => {
    setMusicList(musicList.filter((music) => music.id !== id));
  };

  const onToggleMusic = (id) => {
    setMusicList(
      musicList.map((music) =>
        music.id === id ? { ...music, active: !music.active } : music
      )
    );
  };
  return (
    <>
      <CreatMusic
        title={title}
        singer={singer}
        onChangeMusic={onChangeMusic}
        onCreateMusic={onCreateMusic}
      />
      <MusicList
        musicList={musicList}
        onRemoveMusic={onRemoveMusic}
        onToggleMusic={onToggleMusic}
      />
    </>
  );
} 
export default MusicReducerApp;