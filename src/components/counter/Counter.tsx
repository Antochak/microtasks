import React, {useState} from "react";
import classes from "./Counter.module.css";

export const Counter = () => {
    let [a, setA] = useState(0)
    const CounterButton = () => {
        setA(++a)
    }
    const CounterButtonClear = () => {
        setA(0)
    }

    return (<>
            <h2 className={ a === 5 ? classes.red : ''}>{a}</h2>
            {(a === 5) && <h3>Ты пидор!</h3> }
            <button onClick={CounterButton} disabled={a == 5}> Counter</button>
            <button onClick={CounterButtonClear}> Clear</button>
        </>
    )
}
//