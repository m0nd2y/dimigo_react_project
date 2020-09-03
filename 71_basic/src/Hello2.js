import React from "react" // const React = react
import PropTypes from "prop-types";

function Hello2({ id, name, color}) {
    return (
        <div>안녕하세요, 리액트를 배워봅시다.hello2 </div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{color}</div>

    )
}

Hello2.defaultProps = {
    id: "0",
    name : "이름없음",
    nickname : "별명없음",
    color : "black",
};

Hello2.propTypes = {
    id : PropTypes.string.isRequired,
    name : PropTypes.string,
};
export default Hello2;