import { useState } from 'react'
import { signupUser, loginUser } from '../../config/Firebase'


function Auth () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setName] = useState('')
    const [age, setAge] = useState('')

    return(

        <div>
            <input
            onChange={e => setName(e.target.value)}
            type="name" placeholder="write your name"/>
            
            <input
            onChange={e => setAge(e.target.value)}
            type="number" placeholder="write your age"/>
            
            <input
            onChange={e => setEmail(e.target.value)}
            type="email" placeholder="write your email"/>
            
            <input
            onChange={e => setPassword(e.target.value)}
            type="password" placeholder="write your password"/>

            <br/>
            <button onClick={() => signupUser({email, password,fullName,age})}>Signup</button>
            <br/>
            <button onClick={() => loginUser(email, password)}>Login</button>

        </div>
    );

}

export default Auth