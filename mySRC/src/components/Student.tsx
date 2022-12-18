import React, {useState} from "react";

type StudentsType = {
    id: number
    name: string
    age: number
    stack: Array<string>
}
type ComponentType = {
    students: Array<StudentsType>
    DeleteStudent: (id: number)=>void
}

export const Student = () => {
    let [students, setStudent] = useState<Array<StudentsType>>([
        {
            id: 1,
            name: 'John Sina',
            age: 43,
            stack: ['HTML', 'CSS', 'JS', 'REACT']
        }, {
            id: 2,
            name: 'Jack Daniels',
            age: 42,
            stack: ['HTML', 'CSS', 'JS', 'REACT']
        }, {
            id: 3,
            name: 'Smith Wesson',
            age: 25,
            stack: ['HTML', 'CSS', 'JS', 'REACT']
        }, {
            id: 4,
            name: 'David Blane',
            age: 51,
            stack: ['HTML', 'CSS', 'JS', 'REACT']
        }, {
            id: 5,
            name: 'Tom Jerry',
            age: 33,
            stack: ['HTML', 'CSS', 'JS', 'REACT']
        }, {
            id: 6,
            name: 'William Lawson',
            age: 21,
            stack: ['HTML', 'CSS', 'JS', 'REACT']
        }
    ])

const transformNames =() => {
    console.log(students)
    let splitName = students.map((student: StudentsType, id) => ({
        id: student.id,
        firstName: student.name.split(' ')[0],
        lastName: student.name.split(' ')[1],
        age: student.age,
        stack: ['HTML', 'CSS', 'JS', 'REACT']
    }))
    console.log(splitName)
    return splitName;
}
transformNames()
    const DeleteStudent = (id: number) => {
        setStudent(students.filter(student => student.id !== id))
        console.log(students)
    }
    return (
        <div>
            <ul>
                {students.map((student) => <li key={student.id}>
                    <button onClick={() => DeleteStudent(student.id)}>Delete</button> -
                        {student.name}, age:  {student.age}
                    </li>
                )}
            </ul>
        </div>
    )
}