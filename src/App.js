import React, { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import {LoginContext} from  './context/LoginContext'



function App() {


  const [username , setUsername] = useState("");
  const [showProfile , setShowProfile] = useState(false);
    
  return (
    <div className="App">
      <LoginContext.Provider value={{username , setUsername , setShowProfile}} >
      {showProfile ? <Profile/>  : <Login/>}
      </LoginContext.Provider>
 
   
    </div>
  );
}

export default App;
