import React from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logout} =useAuth();
    return (
        
        <>
  <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home">AL AMIN Travel</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#hotels">Hotels</Nav.Link>
      <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
      <Nav.Link as={HashLink} to="/addService">Added A New Services</Nav.Link>
      <Nav.Link as={HashLink} to="/manageServices">Manage All Orders</Nav.Link>
      <Nav.Link as={HashLink} to="/about">About</Nav.Link>

      {user?.email ?
        <Button onClick={logout} variant="light">Logout</Button> :
      <Nav.Link as={Link} to="/login">Login</Nav.Link> }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
</>

    );
};

export default Header;


// 
{/* <Link to="home">Home</Link>
<Link to="/Services">Services</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/register">Register</Link>
<Link to="/login">Login</Link>
<span>{user.displayName} </span>
{user?.email &&<button onClick={logout}>Log Out</button>} */}