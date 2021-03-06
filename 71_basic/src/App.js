import React from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import "./App.css";

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
  const name = "react";
  const style = {
    backgroundColor:"yellow", // background-color
    color: "blue",
    fontSize : 30, // font-size

  }
  return (
    // 주석인가?
  <div>
    {/*주석인가?*/}
    <div style={style}>{name} </div>
    <div className="box"> </div>
    <Hello name={name} color="blue" >
      태그안의 텍스트입니다.
    </Hello>
    {name}
    
    <Hello2 messages={["메세지1", "메세지2", "메세지3"]} />

  </div>
  )
};

export default App;
