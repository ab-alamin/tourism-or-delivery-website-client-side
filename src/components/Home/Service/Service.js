import React from 'react';
import './Service.css';
import Button from 'react-bootstrap/Button';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <div>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>Name:{name}</Card.Title>
                <p>Service Fee:{price}</p>
                <Card.Text>
                Description:{description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/information/${_id}`}>
                    <Button variant="warning">book now {name.toLowerCase()} </Button>{' '}
                    </Link>
                {/* <Link to="/login"><Button variant="warning">Details</Button>{' '}</Link> */}
                </Card.Footer>
            </Card>
            </CardGroup>
            </div>
        </div>
    );
};

export default Service;