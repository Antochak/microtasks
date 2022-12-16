import {Student} from "./components/Student";
import {MoneyFilter} from "./components/money";
import {Counter} from "./components/counter/Counter";
import {Button} from "./components/button";
import React from "react";
import {Message} from "./components/Message";

export function App() {

    return (
        <div>
            <Message/>
            <Student />
            <Counter/>
            <MoneyFilter />
            <Button/>
        </div>
    );
}


