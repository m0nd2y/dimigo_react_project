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
    <div 
      //주석인가? 
      style={style}>{name}
      </div>
    <div
      className="box">

      </div>
    <Hello />
    <Hello2 />
  </div>
  ) 
};

export default App;
