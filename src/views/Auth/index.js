import { useState } from 'react'
import PostAd from './PostAd'
import { signupUser, loginUser } from '../../config/Firebase'
import { useHistory } from 'react-router-dom'


function Auth ( {updateUser} ) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const [image, setImage] = useState('')
    const [fullName, setName] = useState('')
    const [age, setAge] = useState('')
    const [screen, setScreen] = useState('loginScreen')
    const history = useHistory()

    const loginScreen = () => {
        setScreen('loginScreen')
    }

    const signupScreen = () => {
        setScreen('singupScreen')
    }

    async function newUser() {
        const uid = await signupUser({email, password,fullName,age,number,image})
        console.log("newUser uid ===>" , uid)
        alert("Signed up successfully!")
    }
    
    async function userLog() {
        const user = await loginUser(email, password)
        console.log('user from component', user)
        // updateUser(user)

        // alert("Logged in successfully!")
        history.push('/')

    }

    

    return(

        <div>

        {screen === "loginScreen" && <div className="login-content">

        <div className="login-form">

        <h1 class="form-title">Login</h1>

        <div className="input-content">
        <input
        onChange={e => setEmail(e.target.value)}
        type="email" 
        className="form-input"
        placeholder="Write your email"/>
        
        <input
        onChange={e => setPassword(e.target.value)}
        type="password" 
        className="form-input"
        placeholder="Write your password"/>
        </div>
        
        <button className="form-button" onClick={userLog}>Login</button>
        <a href="-" className="form-link">Forgot your password?</a><br/>
        <button className="form-link" onClick={signupScreen}>Don't have an account? Create account</button>

        </div>

    </div>}

    {screen === "singupScreen" && <div className="login-content">
        
        <div className="login-form">
            
            <h1 class="form-title">Create Account</h1>
            
            <div className="input-content">
                
                <input 
                onChange={e => setName(e.target.value)} 
                type="name" 
                className="form-input" 
                placeholder="write your name"/>
                
                <input
                onChange={e => setAge(e.target.value)}
                type="number" 
                className="form-input" 
                placeholder="write your age"/>

<input 
                onChange={e => setNumber(e.target.value)} 
                type="number" 
                className="form-input" 
                placeholder="Write your number"/>

<input 
                onChange={e => setImage(e.target.value)} 
                type="file" 
                className="form-input" 
                placeholder="Write your p"/>
                
                <input 
                onChange={e => setEmail(e.target.value)} 
                type="email" 
                className="form-input" 
                placeholder="Write your email"/>
                
                <input 
                onChange={e => setPassword(e.target.value)} 
                type="password" 
                className="form-input" 
                placeholder="Write your password"/>
                
                </div>
                
                <button className="form-button" onClick={newUser}>Signup</button>
                
                <button class="form-link" onClick={loginScreen}>Already have an account? Sign in</button>
                
                </div>
                
                </div>}



    </div>

    )

}

export default Auth