// 클래스형 컴포넌트

import React, {Component} from "react";

class Music2 extends Component {
    render() {
        const { music, onRemoveMusic, onToggleMusic } = this.props;
        const { id, title, singer, active } = music;
    
        const style = {
            color: active ? "blue" : "black",
            cursor: "pointer"
        }
    return (
            <>
            <div>
                    <b style={style} onClick={() => onToggleMusic(id)}>{title}</b>({singer})
                    <button onClick={() => onRemoveMusic(id)}>삭제</button>
                </div>
            </>
        )
    }

    componentDidMount(){
        console.log("hi")
    }
}

export default Music2;