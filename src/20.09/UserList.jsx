import React from 'react'
import UserInfo from './UserInfo'

function UserList(props) {
    return (
        <div>
            {props.users.map(user => (
                <UserInfo key={user.id} {...user} />
            ))}
        </div>
    )
}

export default UserList