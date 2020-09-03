import React,  {useState} from "react";

function StateSample() {
    // [state값, 업데이트 함수] = useState(초기값)
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const counter = () => {
        setCount(count+1); //setter 함수를 통해 직접 변경해야됨
    };

    const plus = () => {
        setNumber(number+1); //setter 함수를 통해 직접 변경해야됨
    };

    const minus = () => {
        setNumber(number-1); //setter 함수를 통해 직접 변경해야됨
    };

    const reset = () => {
        setNumber(number-number); //setter 함수를 통해 직접 변경해야됨
    };

    return (
        <>
            <div>
                <p>You clicked {count} times.</p>
                <button onClick={counter()}>Click me[+]</button>
            </div>
            <div>
                <h1>{number}</h1>
                <button onClick={plus}>Click me[+]</button>
                <button onClick={minus}>Click me[-]</button>
                <button onClick={reset}>Click me[reset]</button>
            </div>
        </>
    )
}


export default StateSample;