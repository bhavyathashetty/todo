import React from 'react';
import './Navigation.css'


const Navigation = ({ isSignedIn, onRouteChange, setSignedIn}) => {

    if (isSignedIn) {
        return (
            <nav className='navbar'>
                <button onClick={() => {
                    onRouteChange('signin')
                    setSignedIn(false)
                }}>Signout</button>
            </nav>
        )
    }
    else {
        return (
            <nav className='navbar'>
                <button
                    onClick={() =>  onRouteChange('signin') }>SignIn</button>
                <button onClick={() => onRouteChange('register')}>Register</button>
            </nav>
        )
    }


}

export default Navigation;