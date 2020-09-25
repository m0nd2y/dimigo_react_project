import React, { useRef, useReducer, createContext } from "react";
import "./App.css";
import MusicList from "./MusicList";
import CreatMusic from "./CreatMusic";

const initialState = {
    music: {
        title: "",
        singer: "",
        actvive: false,
    },
    musicList: [
        { id: 1, singer: "아이유", title: "eight", active: false },
        { id: 2, singer: "폴킴", title: "Hero", active: false },
        { id: 3, singer: "장범준", title: "실버판테온", active: false },
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                music: {
                    ...state.music,
                    [action.name]: action.value
                }
            };
        case "CREATE":
            return {
                musicList: state.musicList.concat({
                    ...state.music,
                    id: action.music.id,
                    active: false
                }),
                music: initialState.music
            };
        case "REMOVE":
            return {
                ...state,
                musicList: state.musicList.filter(music => music.id !== action.id)
            };
        case "TOGGLE":
            return {
                ...state,
                musicList: state.musicList.map(
                    music => music.id === action.id ?
                        { ...music, active: !music.active } : music)
            };
        default:
            throw new Error("Unhandled action");
    }
}

export const MusicContext = createContext(null)

function MusicReducerApp() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { title, singer } = state.music;
    const { musicList } = state;


    return (
        <>
            <MusicContext.Provider value={dispatch}>
                <CreatMusic
                    title={title}
                    singer={singer}
                />
                <MusicList
                    musicList={musicList}
                />
            </MusicContext.Provider>
        </>
    );
}
export default MusicReducerApp;