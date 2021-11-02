
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Errorfile = () => {
    return (
        <div>
            <img style={{width: '100%'}} className="img-fluid" src="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503ssl=1" alt="" />
            <br />
            <Link to="/"><Button variant="warning">Go Back</Button>{' '}</Link>
        </div>
    );
};

export default Errorfile;