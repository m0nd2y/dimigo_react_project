import React,  {useState} from "react";

function StateSample2() {
    const [number, setNumber] = useState(1);
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items,
            {
                id: number,
                value: number
            }
        ])
        setNumber(number + 1);
    };
    return (
        <>
            <div>
                <button onClick={addItem}>add Item</button>
                <ul>
                    {
                        items.map(item => {
                            return <li key={item.id}>{item.value}</li>;
                        })}
                </ul>
            </div>
        </>
    )
}

export default StateSample2;