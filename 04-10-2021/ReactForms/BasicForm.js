import React, { useState } from 'react'
//Arrow functions of JS 
const Forms = () => {
    //because stae are valid within the react function

    const [name, setName] = useState('Enter your text')
    const [fullName, setfullName] = useState('Enter your name')

    const inputEvent =(event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const onSubmit = () => {
        setfullName(name)
    }
    return (
        <div>
            <h1> Hello {fullName} </h1>
            <input type='text' onChange={inputEvent} value ={name} placeholder = "Enter your name" />
            <button onClick={onSubmit}> click me </button>
        </div>
    )
}
export default Forms