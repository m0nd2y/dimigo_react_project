import React, { useState, useRef } from "react"; //비구조화 할당?

function UpgradeInput() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
  });


  // inputId = {current: }
  const inputId = useRef(); //ref 객체 
  const inputName = useRef(); //ref 객체 
  
  const { id, name } = student;

  const onChange = (e) => {
    const { value, name } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const onReset = () => {
    setStudent({
      id: "",
      name: "",
    });
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