import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div id="contact"> 
            <div className="card text-center">
  <div className="card-header">
  </div>
  <div className="card-body">
    <h5 className="card-title">More Information Please Contract Us</h5>
    <p className="card-text">Our help and support center 24hrs open.</p>
    <Link to="register"  className="btn btn-primary">Please Register</Link>
    <br />
    <img  style={{width: '100%'}} className="img-fluid" src="https://image.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg" alt="" />
  </div>
</div>
            <h2 className="mt-20">Contract us: 01846121538</h2>
        </div>
    );
};

export default Contact;