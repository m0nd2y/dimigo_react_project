import React, { useState } from "react";

function UpgradeInput() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
  });
  
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
  };

  return (
    <>
      <div>
        <input onChange={onChange} value={id} name="id" />
        <input onChange={onChange} value={name} name="name" />
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