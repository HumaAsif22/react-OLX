import './App.css';
// import {useState, useEffect} from 'react'
import Login from './views/Auth/Login'
import Signup from './views/Auth/Signup';
function App() {



  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          {/* <Auth/> */}
          <Login/>
          {/* <Signup/> */}
        </div>
      </header>
    </div>
  );
}

export default App;
