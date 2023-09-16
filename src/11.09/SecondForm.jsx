import React, { useState } from 'react'

function SecondForm() {

    const [nameState, setNameState] = useState('')
    const [lastNameState, setLastNameState] = useState('')
    const [nickNameState, setNickNameState] = useState('')
    const [mailState, setMailState] = useState('')
    const [sexState, setSexState] = useState('')
    const [ageState, setAgeState] = useState('')
    const [photoState, setPhotoState] = useState('')




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
            setNameState(event.target.value)
        }
    }

    const handleLastNameChange = (event) => {
        setLastNameState(event.target.value)
    }


        const handleEmailChange = event => {
        let email = event.target.value
        if (email.length < 5) {
            alert('wrong email')
            setMailState('')
        } else {
            setMailState(event.target.value)
        }
    }


    return (
        <form onSubmit={handlerSubmit}>
            <input onChange={handleNameChange} value={nameState} placeholder="input name" type="text" />
            <input onChange={handleLastNameChange} value={lastNameState} placeholder='input lastname' type="text" />
            <input value={nickNameState} placeholder='input nickName' type="text" />
            <input onChange={handleEmailChange} value={mailState} placeholder='input mailState' type="email" />
            <select name="sex" id="sex">
                <option value={sexState}>Male</option>
                <option value={sexState}>Female</option>
            </select>
            <input value={ageState} placeholder='input ageState' type="number" />
            <input value={photoState} placeholder='input photoState' type="file" />



            <input type="submit" />
        </form>
    )
}

export default SecondForm