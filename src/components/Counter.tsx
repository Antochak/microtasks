import React, {useState} from "react";

export const Counter = () => {
    let [a, setA] = useState(0)
    const CounterButton = () => {
        setA(++a)
    }
    const CounterButtonClear = () => {
        setA(0)
    }
    return (<>
            <h2>{a}</h2>
            <button onClick={CounterButton}> Counter</button>
            <button onClick={CounterButtonClear}> Clear</button>
        </>
    )
}