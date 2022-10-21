import React, { useState } from 'react';

const Form = () =>
{
    // We use state to track input values
    const [input, setInput] = useState({});

    // Event handler
    const handleSubmit = (event) =>
    {
        event.preventDefault()
        console.log("The name you entered is", input)
    } 

    //
    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value  = event.target.value;
        setInput(values =>({...values, [name]: value}))
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type = "text" name = "username" value = {input.username} onChange = {handleChange} />
            </label>
            <label>Enter your age:
                <input type = "number" name = "age" value = {input.age} onChange = {handleChange} />
            </label>
            <label>Enter your Email 
                <input type ="email" name = "email" value = {input.email} onChange = {handleChange} />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form