import React, { useReducer, useRef } from "react"; //비구조화 할당?

const initialState = {
    id: "",
    name: "",
}

function reducer(state, action) {
    switch(action.type) {
        case "CHANGE" :
            return state + 1;
        case "REEST" :
            return {id : "", name : ""}
        default :
            throw new Error("Unhandled action");
    }
}

function Reducersample2() {
  const [student, dispatch] = useReducer(reducer,initialState);

  const { id, name } = student;

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch({
        type: "CHANGE",
        name,
        value
    })
  };

  const onReset = () => {
    dispatch({
        type : "RESET"
    })
    inputName.current.focus();
  };

  return (
    <>
      <div>
        <input onChange={onChange} value={id} name="id" ref = {inputId} />
        <input onChange={onChange} value={name} name="name" ref = {inputName} />
        <button onClick={onReset}>초기화</button>
        <div>
          <p>id: {id}</p>
          <p>name: {name}</p>
        </div>
      </div>
    </>
  );
}

export default UpgradeInput;