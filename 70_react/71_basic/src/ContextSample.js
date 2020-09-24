import React, { createContext, useContext } from "react";

const MyContext = createContext("아무개'")


function Child({ text }) {
  return <div>안녕하세요, {text}님</div>;
}

function Parent({ text }) {
  return <Child text={text} />;
}

function GrandParent({ text }) {
  return <Parent text={text} />;
}

function ContextSample() {
  return <GrandParent text="홍길동" />;
}

export default ContextSample;