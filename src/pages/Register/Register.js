
import '../Login/login.css'

const Register = ({handleNamechange,handleEmailChange,handlePasswordChange, onSubmitSignIn }) => {

    

    return (

        <div className="login">
            <form>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor='username'>Username:</label>
                    <input type='text' placeholder='Enter Username' onChange={handleNamechange} />
                    <br />
                    <label htmlFor='useremail'>Email:</label>
                    <input type='email' placeholder='Enter Useremail' onChange={handleEmailChange} />
                    <br />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' placeholder='Enter Password' onChange={handlePasswordChange} />
                    <br />
                    <button type='submit' onClick={onSubmitSignIn}>Register</button>
                </fieldset>

            </form>

        </div>
    )
}
export default Register;