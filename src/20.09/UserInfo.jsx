import React from 'react'

function UserInfo(props) {
    if (typeof props.login === 'undefined') {
        return (
            <div>No user inforamtion</div>
        )
    } else {
        return (
            <div>
                <h2>Login: {props.login}</h2>
                <h2>Name: {props.name}</h2>
                <h2>Followers: {props.followers}</h2>
                <img src={props.avatar_url} width='200' alt={props.login} />
            </div>
        )
    }
}

export default UserInfo