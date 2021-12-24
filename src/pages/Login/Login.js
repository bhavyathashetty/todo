import React from 'react';
import './login.css'


const Login = ({handleSEmailChange,handleSPasswordChange,onLogin,getTodos}) => {

    return (
        <div className='login'>
            <form>
                <fieldset>
                    <legend>Login</legend>
               
                    <label htmlFor='useremail'>Email:</label>
                    <input type='email' placeholder='Enter Useremail' onChange={handleSEmailChange} />
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' placeholder='Enter Password' onChange={handleSPasswordChange} />
                    <br/>
                    <button type='submit'  onClick={onLogin} >Login</button>
                    
                    </fieldset>
            
            </form>
        </div>

    )

}

export default Login;