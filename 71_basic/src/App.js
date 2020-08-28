import React from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';

// 함수형 컴포넌트
// return (JSX)
// Hello2 컴포넌트 작성 -> App에 추가

function App() {
  return (
  <div>
    <Hello />
    <Hello2 />
  </div>
  ) 
};

export default App;
