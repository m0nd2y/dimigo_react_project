import React from "react" // const React = react
import PropTypes from "prop-types";

function Hello2 ({ messages = [], isLoggedIn, id, name, color, children}) {

    return (
        <>
            <div>
                <div style={{color}}>안녕하세요, 리액트를 배워봅시다.hello2 </div>
                <div>{id}</div>
                <div>{name}</div>
                <div>{color}</div>
                <div>{children}</div>
            </div>
            <div>
            {
            messages.length > 0 ?
                messages.length + "건의 메시지가 있습니다." :
                "메시지가 없습니다"
            }
            </div>
            <div>
                {
                    isLoggedIn && "로그인 되었습니다"
                }
            </div>
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