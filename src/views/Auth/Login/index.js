import { useState } from 'react'
import { loginUser } from '../../../config/Firebase';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <div className="login-content">

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
            
            <button className="form-button" onClick={() => loginUser(email, password)}>Login</button>
            <a href="-" className="form-link">Forgot your password?</a><br/>
            <a className="form-link" href="-">Don't have an account? Create account</a>

            </div>

        </div>
    );
}

export default Login