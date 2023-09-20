import React, { useState } from 'react'
import axios from "axios";
import './style.css'


function FormAndAPI(props) {

    const [userName, setUserName] = useState('')

    const handleChange = event => setUserName(event.target.value)
    const handleSubmit = async event => {
        event.preventDefault()
        const apiUrl = `https://api.github.com/users/${userName}`
        try {
            const response = await axios.get(apiUrl)
            props.onSubmit(response.data)
        } catch (error) {
            props.onSubmit({})
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder='search name' value={userName} />
                <input type="submit" value='search Github user' />
            </form>
        </>
    )
}

export default FormAndAPI