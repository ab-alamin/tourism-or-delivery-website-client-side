import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => { 
    const {signInUsinggoogle,signInUsingGithub} = useAuth();

    return (
        <div>
            <h2>Please Login</h2>
            <button className="btn btn-warning pb-3 m-5" onClick={signInUsinggoogle}>Google Sign In</button>
            <br />
            <button className="btn btn-secondary pb-3 m-5" onClick={signInUsingGithub}>Github Sign In</button>
            <br />
            <button className="btn btn-danger pb-3 m-5">New Register</button>
        </div>
    );
};

export default Login;