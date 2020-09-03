import React from "react" // const React = react
import PropTypes from "prop-types";

//  const props = { name : "홍길동" , color : "blue", children=""}

function Hello({ name = "이름없음", color = "black", children = "내용없음"}) {
    name = "아무개";
    return (
        <>
            <div style={{color}} >안녕하세요, {name}님</div>
            <div>{children}</div>
        </>
    )
}

Hello.defaultProps = {
    name: "이름없음2",
    color : "black",
    children : "내용없음2",
};

Hello.propTypes = {
    name : PropTypes.string.isRequired,
    color : PropTypes.string,
    children : PropTypes.string,
};



export default Hello;