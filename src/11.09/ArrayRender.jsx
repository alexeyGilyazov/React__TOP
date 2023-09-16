import React from 'react'

function ArrayRender() {

    const users = [
        { firstName: 'Alex', lastName: 'Gilyazov', id:1 },
        { firstName: 'Valery', lastName: 'Gilyazova', id:2},
        { firstName: 'Byak', lastName: 'Gilyazov', id:3 }
    ]

    return (
        <>
            <div>{users.map(item => <div key={item.id}>{item.firstName}<p>{item.lastName}</p> <hr /></div>)}</div>
            <ul>
                {users.map(item => <li key={item.id}>{item.firstName} {item.lastName}</li>)}
            </ul>
        </>
    )
}

export default ArrayRender