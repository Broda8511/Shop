import React from 'react';
import '../styles/login.css';
import SignIn from '../components/SignIn';

const LoginPage = (props) => {
    return (
        <>
            <div className="login__header">
                <h2>Login</h2>
            </div>

            <div className="login">
                <div className="login__paragraph">
                    <SignIn />
                </div>

            </div>
        </>
    );
}

export default LoginPage;
