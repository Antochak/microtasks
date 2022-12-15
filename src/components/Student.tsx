import React, {useState} from "react";

type StudentsType = {
    id: number
    name: string
    age: number
}
type ComponentType = {
    students: Array<StudentsType>
    DeleteStudent: Function
}

export const Student = () => {
    let [students, setStudent] = useState<Array<StudentsType>>([
        {
            id: 1,
            name: 'John',
            age: 43
        }, {
            id: 2,
            name: 'Jack',
            age: 42
        }, {
            id: 3,
            name: 'Smith',
            age: 25
        }, {
            id: 4,
            name: 'David',
            age: 51
        }, {
            id: 5,
            name: 'Tom',
            age: 33
        }, {
            id: 6,
            name: 'William',
            age: 21
        }
    ])

    const DeleteStudent = (id: number) => {
        setStudent(students.filter(student => student.id !== id))
        console.log(students)
    }


    return (
        <div>

            <ul>
                {students.map((student) => <li key={student.id}>
                        {student.name} age:
                        {student.age}
                        <button onClick={() => DeleteStudent(student.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}