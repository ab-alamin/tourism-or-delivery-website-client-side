import React from 'react';
import Button from 'react-bootstrap/Button';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="text-light">Join Us</h2>
            <>
            <Button href="https://www.facebook.com/groups/completewebdevelopment4/?multi_permalinks=525833522000228%2C525833212000259%2C525832662000314%2C525832538666993%2C525823565334557&notif_id=1634232255447913&notif_t=group_activity&ref=notif">FaceBook</Button>
            </>
        </div>
    );
};

export default Footer;