import React from "react";

export const Button = () => {
    const ButtonFunc1 = (id: number, name: string, age: number) => {
        console.log(id, name, age)
    }
    return (<>
            <button onClick={() => ButtonFunc1(7, "Smith", 32)}> Universal Button</button>
        </>
    )
}