import React from 'react'

const MultipleInputs =() => {
    return (
        <>
        <form action="">
            <div>
                <label htmlfor = "username"> Fullname </label>
                <input type = 'text' autoComplete="off" name= 'username' id='username' />
            </div>
            <div>
                <label htmlfor = "email"> email </label>
                <input type = 'text' autoComplete="off" name ='email' id='username' />
            </div>
            <div>
                <label htmlfor = "phone"> phone </label>
                <input type = 'number' autoComplete="off" name='phone' id='username' />
            </div>
            <div>
                <label htmlfor = "password"> password </label>
                <input type = 'password' autoComplete="off" name='password' id='username' />
            </div>
            <button type = "submit">Sign/Regirter </button>
        </form>

        </>
    )
}
export default MultipleInputs