import React,  {useState} from "react";

function StateSample2() {
    const [number, setNumber] = useState(1);
    const [items, setItems] = useState([]);

    const addItem = () => { };
    return (
        <>
            <div>
                <button onClick={addItem}>add Item</button>
            </div>
        </>
    )
}

export default StateSample2;