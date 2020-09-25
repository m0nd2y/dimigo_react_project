import React, {useRef, useContext} from "react";
import { MovieContext } from "./MovieReducerApp";

function CreatMusic({ mtitle, director, year}) {
    
    const dispatch = useContext(MovieContext)
    

  const onChangeMovie = (e) => {
    const { name, value } = e.target;
    dispatch({
        type : "CHANGE",
        name,
        value
        })
    };

  const nextId = useRef(4);

  const onCreateMovie = () => {
      console.log(nextId.current)
      dispatch({
          type : "CREATE",
          movie: {
              id: nextId.current,
              mtitle,
              director,
              year
            }
        })
        nextId.current += 1;
        console.log(nextId.current)
  };
  
    return (
        <>
            <input name="mtitle" placeholder = "영화제목" onChange={onChangeMovie} value={mtitle}></input>
            <input name="director" placeholder = "작가" onChange={onChangeMovie} value={director}></input>
            <input name="year" placeholder = "년도" onChange={onChangeMovie} value={year}></input>
            <button onClick={onCreateMovie}>등록</button>
        </>
    )
}


export default CreatMusic;