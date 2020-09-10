import React, { useState } from "react";

function InputSample() {
    const [text, settext] = useState('');
    const onChange = (e) => {
        console.log(e.target.value);
        settext(e.target.value)
    };
    const onReset = () => {
        settext('');
    };
    return (
        <>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                값 : {text}
            </div>
        </>
    )
}


export default InputSample;