import React, { useState } from 'react'

function Home() {

  const [name, setName] = useState('Alex')
  const [age, setAge] = useState(29)
  

  const changeAge = (event) => {
    setAge(event.target.value)
  }

  const changeName = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <h1>Name: {name}</h1>
      <input type="text" value={name} onChange={changeName} />
      <input type="number" onChange={changeAge}/>
      <h2>Age: {age}</h2>
    </>
  )
}

export default Home