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
  });

  const {title, singer} = music;

  const [musicList, setMusicLisc] = useState([
    { id: 1, singer: "아이유", title: "eight" },
    { id: 2, singer: "폴킴", title: "Hero" },
    { id: 3, singer: "장범준", title: "실버판테온" },
  ]);

  const onChange = (e) => {
    const { name, value } = e.targer;
    setMusic({
      ...music, 
      [name] : value // e.target.name -> title, value
    })
  }
  // nextID.current = 4
  const nextID = useRef(4);

  const onCreate = () => {
    nextID.current += 1;
  }
  return (
    <>
      <CreatMusic onChange={onChange}/>
      <MusicList musicList={musicList} />
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
