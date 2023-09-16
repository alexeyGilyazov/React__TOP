import React, { useState} from 'react'

function Form() {

    const [nameState, setNameState] = useState('')
    const [lastNameState, setLastNameState] = useState('')


    const handlerSubmit = event => {
        event.preventDefault()
        console.log(nameState, lastNameState)
    }

    const handleNameChange = event => {
        let name = event.target.value
        if (name.trim().toUpperCase() === "TEST") {
            alert('wrong name')
            setNameState('')
        } else {
            setNameState( event.target.value )
        }
    }

    const handleLastNameChange = (event) => {
        setLastNameState( event.target.value)
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input onChange={handleNameChange} value={nameState} placeholder="input name"  type="text"/>
            <input onChange={handleLastNameChange} value={lastNameState} placeholder='input lastname' type="text"  />
            <input type="submit" />
            <p>Name - {nameState}</p>
            <p>Lastname - {lastNameState}</p>
        </form>
    )
}

export default Form