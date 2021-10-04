import React,{ useState } from 'react'
export default function Form(props){
    const [text,setText]=useState('Enter text here')
    const handleUpClick = () => {
        let word = text.toUpperCase()
        console.log("UpClick button is clicked")
        setText(word)
    }    
const handleOnChange = (event) =>{
    console.log("OnChnage")
    setText(event.target.value)    
}
const handledwonClick = () => {
    let lower = text.toLowerCase()
    setText(lower)
}
    return (
        <div className="container">
            <div className="mb-3">
            <label for="myform" className="form-label">{props.heading}</label>
            <textarea className="form-control" value = {text} onChange = {handleOnChange} 
            id="myfrom" rows="3"></textarea> <br/>
            <button className='btn btn-outline-danger mx-2' 
            onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-outline-danger mx-2' 
            onClick={handledwonClick}>Convert to Lowercase</button>
            </div>

            <div className="container">
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length} : words {text.length}: charecters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read the words entered </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}