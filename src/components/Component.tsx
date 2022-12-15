import React, {useState} from "react";

export type StudentsType = {
    id: number
    name: string
    age: number
}
export type ComponentType = {
    students: Array<StudentsType>
    DeleteStudent: Function
}

export const Component = (props: ComponentType) =>  {
    let [message, SetMessage] = useState('')

    function handleChange(event: any) {
        SetMessage(event.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} value={message}/>
            <span> Вы ввели: {message}</span>
            <ul>
                {props.students.map((student) => <li key={student.id}>
                        {student.name} age:
                        {student.age}
                        <button onClick={() => props.DeleteStudent(student.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}