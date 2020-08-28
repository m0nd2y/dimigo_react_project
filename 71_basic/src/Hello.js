import React from "react" // const React = react

// const props = { name : "홍길동" , color : "blue", children=""}

function Hello({name, color}) {
    return (
        <div style={{color}} >안녕하세요, {name}님</div>
    )
}

export default Hello;