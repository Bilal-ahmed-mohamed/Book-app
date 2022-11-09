import React, {useContext} from 'react'
import {LoginContext} from '../context/LoginContext'
function Profile() {


    const { username } = useContext(LoginContext);
  return (
    <div>
        <h1>profile</h1>
        <h2>username:{username}</h2>
    </div>
  )
}

export default Profile;