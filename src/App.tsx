import React, {useState} from 'react';


import {Component} from "./components/Component";
import {Button} from "./components/button";
import {MoneyFilter} from "./components/money";



function App() {

    let [students, setStudent] = useState([
        {
            id: 1,
            name: 'John',
            age: 43
        },   {
            id: 2,
            name: 'Jack',
            age: 42
        },  {
            id: 3,
            name: 'Smith',
            age: 25
        },   {
            id: 4,
            name: 'David',
            age: 51
        },   {
            id: 5,
            name: 'Tom',
            age: 33
        },   {
            id: 6,
            name: 'William',
            age: 21
        }
    ])
    let [a, setA] = useState(1)

    const ButtonFunc1 = (id: number, name: string, age: number) => {
        console.log(id, name, age)
    }

    const CounterButton = () => {
        setA(++a)
    }
    const CounterButtonClear = () => {
        setA(0)
    }
    const DeleteStudent = ( id: number) => {
        setStudent(students.filter(student => student.id !== id))
        console.log(students)
    }

    return (
        <div>

            <Component students={students} DeleteStudent={DeleteStudent}/>
            <h2>{a}</h2>
            <button onClick={CounterButton}> Counter </button>
            <button onClick={CounterButtonClear}> Clear </button>
            <Button name={'UniversalButton'} callBack={()=>ButtonFunc1(7, "Smith", 32)} />
            <MoneyFilter />


        </div>
    );
}

export default App;
