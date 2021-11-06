import './App.css';
import Router from './config/router';
import { Provider } from 'react-redux';
import store from './store';


function App() {

  // const [user, setUser] = useState()

  // const updateUser = (userObj) => {
  //   setUser(userObj)
  // }


  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <div className="main">
        <Router/>  

          {/* {user ? <Home/> : <Auth updateUser={updateUser}/>} */}
        </div>
      </header>
    </div>
    </Provider>
  );
}

export default App;
