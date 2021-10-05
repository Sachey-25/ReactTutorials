import React, { useState } from 'react'

const MultipleInputs =() => {

    const [userRegistration, setuserRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
    const [records, setrecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
       console.log(name, value)
       setuserRegistration({ ...userRegistration, [name]:value })
    }   
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newRecord = ({ ...userRegistration, id:new Date().getTime().toString})
        console.log(records)
        setrecords([ ...records, newRecord])

        setuserRegistration({username:"", email:"", phone:"", password:""})
    }
    return (
        <div className="container">
        <form action ="" onSubmit = {handleSubmit}>
            <div>
                <lable htmlFor="username">username </lable><br/>
                <input type="text" autoComplete="off" 
                value={userRegistration.username}
                onChange={handleInput}
                name="username" is="username"/>
            </div>
            <div>
                <lable htmlFor="email">email </lable><br/>
                <input type="email" autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}
                name="email" is="email"/>
            </div>
            <div>
                <lable htmlFor="phone">phone </lable><br />
                <input type="number" autoComplete="off"
                value={userRegistration.phone}
                onChange={handleInput}
                name="phone" is="phone"/>
            </div>
            <div>
                <lable htmlFor="password">password </lable><br />
                <input type="password" autoComplete="off"
                value={userRegistration.password}
                onChange={handleInput}
                name="password" is="password"/> <br/>
            </div>
            <br />
            <button type ="submit">Register</button>
        </form>
        <div>
        {
            records.map((curElem) => {
                const { id, username,email,phone,password } = curElem
                return(
                    <div className="MyDataInStyle" key={id}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{password}</p>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}
export default MultipleInputs