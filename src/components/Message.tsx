import React, {ChangeEvent, useState} from "react";

type MessageType= {
    message: string
}

export const Message = () => {
    let [inputText, SetInputText] = useState<string>(' ')
    let [message, SetMessage] = useState<Array<MessageType>>([{message: ''}])

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        SetInputText(event.currentTarget.value);

    }
    const addMessage =(value: string) => {
        let newMessage = {message: value}
        SetMessage([newMessage, ...message])
        SetInputText('')
    }
    return (<>
                <input onChange={handleChange} value={inputText}/>
                <button onClick={()=> addMessage(inputText)}>+</button>
                <span> Вы ввели: {inputText}</span>
        {message.map((el, index) => <div key={index}>{el.message}</div>)}
    </>)
}
