import React from "react" // const React = react
import PropTypes from "prop-types";

function Hello2 ({messages = []}) {

    return (
        <>
        {messages.length > 0 ?
            messages.length + "건의 메시지가 있습니다." :
            "메시지가 없습니다"
        }
        </>
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