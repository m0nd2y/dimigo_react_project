import React, {useRef, useState} from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import "./App.css";
import State from './State';
import StateSample2 from './StateSample2';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import MusicList from './MusicList';
import MovieList from './MovieList';
import CreatMusic from './CreatMusic';
import CreatMovie from './CreatMovie';

// 함수형 컴포넌트
// return (JSX)
// Hello2 컴포넌트 작성 -> App에 추가
// JSX 규칙
// 1. 두개 이상의 태그는 반드시 하나의 태그로 감싸야함
// 2. 여는 태그와 닫는 태그가 있어야 함
// 3. JSX안에서 javascript 값을 사용할 때에는 {} 사용함
// 4. 인라인 style 작성 시 객체 형태로 작성 (Camelcase)
// 5. css class 설정 시에는 class -> className
// 6. 주석작성
// -JSX내에서는 {/* */} 작성
// - 열린 태그 내에서 // 작성

function App() {
  const [music, setMusic] = useState({
    title: '',
    singer: '',
    atcive: false,
  });
  const [movie, setMovie] = useState({
    mtitle: '',
    director: '',
    year: '',
    atcive: false,
  });

  const {title, singer} = music;
  const {mtitle, director, year} = movie;

  const [musicList, setMusicList] = useState([
    { id: 1, singer: "아이유", title: "eight", atcive: false},
    { id: 2, singer: "폴킴", title: "Hero" , atcive: false},
    { id: 3, singer: "장범준", title: "실버판테온" , atcive: false},
  ]);

  const [movieList, setMovieList] = useState([
    { id: 1, mtitle: "스타워즈", director: "조지 루카스", year: "1977" , atcive: false},
    { id: 2, mtitle: "아바타", director: "제임스 카메론", year: "2009" , atcive: false},
    { id: 3, mtitle: "인터스텔라", director: "크리스토퍼 놀란", year: "2014" , atcive: false},
]);

  const onChangeMusic = (e) => {
    const { name, value } = e.target;
    setMusic({
      ...music, 
      [name] : value // e.target.name -> title, value
    })
  }

  const onChangeMovie = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie, 
      [name] : value // e.target.name -> title, value
    })
  }
  // nextID.current = 4
  const nextIdMusic = useRef(4);
  const nextIdMovie = useRef(4);

  const onCreateMusic = () => {
    // 배열에 추가
    // 1. spread 연산자
    
    setMusicList(musicList.concat({
      id: nextIdMusic.current,
      ...music,
    }))

    nextIdMusic.current += 1;

    setMusic({
      title: '',
      singer: '',
    });
  };


  const onCreateMovie = () => {
    // 배열에 추가
    // 1. spread 연산자
    setMovieList([
      ...movieList,
      {
        id: nextIdMovie.current,
        ...movie
        //title: title,
        //singer: singer,
      },
    ]);
  // 2. concat() 함수

    
  setMovieList(movieList.concat({
      id: nextIdMovie.current,
      ...movie,
    }))

  nextIdMovie.current += 1;
  
  setMovie({
      mtitle: '',
      director: '',
      year: '',
    });
    
  };

  const onRemoveMusic = (id) => {
    setMusicList(musicList.filter(music => music.id !== id))
  };

  const onToggleMusic = (id) => {
    setMusicList(
      musicList.map(music => music.id === id ? {
      ...music,
      active: ! music.active,
    } : music ))
  }
  
  const onToggleMovie = (id) => {
    setMovieList(
      movieList.map(movie => movie.id === id ? {
      ...movie,
      active: ! movie.active,
    } : movie ))
  }

  const onRemoveMovie = (id) => {
    setMovieList(movieList.filter(movie => movie.id !== id))
  };

  return (
    <>
      <CreatMusic
        title={title}
        singer={singer}
        onChangeMusic={onChangeMusic}
        onCreateMusic={onCreateMusic}
      />
      <MusicList musicList={musicList} onRemoveMusic={onRemoveMusic} onToggleMusic={onToggleMusic}/>
      
      <CreatMovie
        mtitle={mtitle}
        director={director}
        year={year}
        onChangeMovie={onChangeMovie}
        onCreateMovie={onCreateMovie}
      />
      <MovieList movieList={movieList} onRemoveMovie={onRemoveMovie} onToggleMovie={onToggleMovie}/>
    </>
  );
}

/*
function App2() {
  const name = "react";
  const style = {
    backgroundColor:"yellow", // background-color
    color: "blue",
    fontSize : 30, // font-size

  }
  return (
  <div>
    <div style={style}>{name} </div>
    <div className="box"> </div>
    
    <div>
      <Hello name={name} color="blue" >
      태그안의 텍스트입니다.
      </Hello>
    </div>
    
    <div>
      <Hello2 messages={["메세지1", "메세지2", "메세지3"]} isLoggedIn={true} id="3520" name="이동준" color="blue" >
        m0nd2y
      </Hello2>
      <Hello2></Hello2>
    </div>

  </div>
  )
};*/

export default App;
