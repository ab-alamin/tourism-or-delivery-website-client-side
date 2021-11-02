import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" className="btn btn-success m-2" />
            </form>
            <Link to="/login"className="btn btn-warning bg-danger text-light mt-5 mb-20">Already Registered?</Link>
        </div>
    );
};

export default Register;