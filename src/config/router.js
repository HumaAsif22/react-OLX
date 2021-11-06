import { useEffect, useState } from "react";
import Home from "../views/Home"
import Auth from "../views/Auth";
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PostAd from "../views/Auth/PostAd";


export default function App(){

  const [user, setUser] = useState()
  const [isLoading, setLoading] = useState(true)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, userData => {
      setUser(userData)
      setLoading(false)
    })
  },[])

  if(isLoading) return <div className='loading'><img width="90" height='90' src="https://lh3.googleusercontent.com/proxy/IEcQ17cpdBhWzAGbUPtz5GfrScpMlvt2WhecNWk2T3v1BMVgQxAo6smfg5gNHR-EHvU3tIcX8EbtYTN0442qvCfA4K6P52L-G-SIliaAxQ" /></div>

    return (
        <Router>
      <div>
        

        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/auth">
            {ProtectedRoute(!user , <Auth/>, '/')}
          </Route>
          <Route exact path="/">
            {ProtectedRoute(user, <Home/>)}
          </Route>
          <Route path="/postAd">
            {ProtectedRoute(user, <PostAd/>)}
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

function ProtectedRoute(user, component, redirectTo = '/auth'){
  return user? component: <Redirect to={redirectTo}/>
}