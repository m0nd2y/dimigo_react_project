import React,  {useState} from "react";

function State() {
    // [state값, 업데이트 함수] = useState(초기값)
    let [color, setColor] = useState("black");

    const red = () => {
        setColor( "red" ); //setter 함수를 통해 직접 변경해야됨
    };
    const blue = () => {
        setColor( "blue" ); //setter 함수를 통해 직접 변경해야됨
    };
    const green = () => {
        setColor( "green" ); //setter 함수를 통해 직접 변경해야됨
    };
    
    return (
        <>
            <div>
                <h1 style = {{color}} >색상 바꾸기</h1>
                <button onClick={red}>빨강색</button>
                <button onClick={blue}>파란색</button>
                <button onClick={green}>초록색</button>
                {/*<button onClick={() => {setColor("yellow");}} >노란색</button>*/}
            </div>
        </>
    )
}


export default State;