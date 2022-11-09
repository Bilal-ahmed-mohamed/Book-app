import { useState , useContext } from "react";
import {LoginContext}  from '../context/LoginContext'
 


let Login = () => {


    const {setUsername , setShowProfile , showProfile,username} = useContext(LoginContext)


    return <div>
       
       <input   onChange={ (e) => setUsername(e.target.value) }  placeholder="username" type="text" name="" id="" />
       <input placeholder="password" type="text" name="" id="" />
       <button onClick={() => {setShowProfile(true)}}  >Login</button>

          {showProfile && <h1>{username}</h1>}
    </div>
}

export default Login;