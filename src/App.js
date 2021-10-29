import './App.css';
// import Login from './views/Auth/Login'
// import Signup from './views/Auth/Signup';
import Home from './views/Home';
import Auth from './views/Auth';
import PostAd from './views/Auth/PostAd';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState()

  const updateUser = (userObj) => {
    setUser(userObj)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          
          {user ? <Home/> : <Auth updateUser={updateUser}/>}
          {/* <PostAd/> */}
          
        </div>
      </header>
    </div>
  );
}

export default App;
