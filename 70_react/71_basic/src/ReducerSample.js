import React,  {useReducer} from "react";

function reducer(state, action) {
    switch(action.type) {
        case "ADD" :
            return state + 1;
        default :
            throw new Error("Unhandled action");
    }
}

function reducer2(state, action) {
    switch(action.type) {
        case "PLUS" :
            return state + 1;
        case "MINUS" :
            return state - 1;
        case "RESET" :
            return state - state;
        default :
            throw new Error("Unhandled action");
    }
}

function ReducerSample() {
    // [state값, 업데이트 함수] = useState(초기값)
    const [count, dispatch] = useReducer(reducer, 0);
    const [number, dispatch2] = useReducer(reducer2,0);

    const counter = () => {
        dispatch({
            type: "ADD"
        });
    };

    const plus = () => {
        dispatch2({
            type: "PLUS"
        });
    };

    const minus = () => {
        dispatch2({
            type: "MINUS"
        });
    };

    const reset = () => {
        dispatch2({
            type: "RESET"
        });
    };
    
    return (
        <>
            <div>
                <p>You clicked {count} times.</p>
                <button onClick={counter}>Click me[+]</button>
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


export default ReducerSample;

